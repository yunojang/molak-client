import React, { FC, useMemo } from 'react';
import { css } from '@emotion/css';

import { Button, IThemeCommon, useTheme } from '@wizrnd/nx-ui';

export interface PaginationProps {
  currentPage: number;
  totalPage: number;
  rangeSize?: number;
  onChange?(page: number): void;
  showDetail?: boolean;
}

// temp - fix range = 5
export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPage,
  rangeSize = 5,
  onChange = () => {},
  showDetail = false,
}) => {
  if (totalPage < rangeSize) {
    rangeSize = totalPage;
  }

  const viewPages: number[] = useMemo(() => {
    const arr = [];

    if (currentPage <= Math.floor(rangeSize / 2)) {
      for (let i = 1; i <= rangeSize; i++) {
        arr.push(i);
      }
    } else if (totalPage - currentPage < Math.floor(rangeSize / 2)) {
      for (let i = 0; i < rangeSize; i++) {
        arr.unshift(totalPage - i);
      }
    } else {
      for (
        let i = currentPage - Math.floor(rangeSize / 2);
        i <= currentPage + Math.floor(rangeSize / 2);
        i++
      ) {
        arr.push(i);
      }
    }

    return arr;
  }, [currentPage, totalPage, rangeSize]);

  const canPrev = useMemo(() => currentPage > 1, [currentPage]);
  const canNext = useMemo(
    () => currentPage < totalPage,
    [currentPage, totalPage],
  );

  const toPrevPage = () => {
    if (canPrev) {
      onChange(currentPage - 1);
    }
  };
  const toNextPage = () => {
    if (canNext) {
      onChange(currentPage + 1);
    }
  };

  const theme = useTheme();
  return (
    <div className={makePagerStyle(theme)}>
      <div className="prev">
        <Button
          iconName="ChevronLeftIcon"
          className="py-4"
          disabled={!canPrev}
          onClick={toPrevPage}
        />
      </div>
      <div className="flex items-center gap-2">
        {viewPages.map(p => (
          <div
            key={p}
            className={`page ${currentPage === p ? 'selected' : ''}`}
            onClick={() => onChange(p)}
          >
            {p}
          </div>
        ))}
      </div>
      <div className="next">
        <Button
          iconName="ChevronRightIcon"
          className="py-4"
          disabled={!canNext}
          onClick={toNextPage}
        />
      </div>
    </div>
  );
};

const makePagerStyle = (theme: IThemeCommon) => css`
  margin: 1em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  user-select: none;

  .page {
    box-sizing: border-box;
    width: 44px;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    color: black;
    transition: 0.2s;
  }

  .page:hover {
    background: #f5f5f6;
  }

  .page.selected {
    background-color: ${theme.palette.secondary.main};
    color: white;
    font-weight: bold;
  }
`;
