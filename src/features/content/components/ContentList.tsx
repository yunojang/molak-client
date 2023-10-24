import { FC, ReactNode, useState } from 'react';

import { useContents } from '../api/getContents';

import ContentCard from '@/components/Elements/Card/ContentCard';
import { InfiniteListProps } from '@/components/List/types';

interface ContentListProps extends InfiniteListProps {
  columnCount?: number;
  onSelect?(id: string): void;
  title(totalElements: number, currentPage: number): ReactNode;
  colGap?: number;
}

const ContentList: FC<ContentListProps> = ({
  params,
  columnCount = 4,
  gap = 3,
  colGap = 3,
  title,
  pager,
  onSelect,
}) => {
  const { contents, totalElements, totalPages, isEnd } = useContents(params);

  return (
    <div>
      {title(totalElements, params.page ?? 1)}
      <div
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(0px, 1fr))`,
          rowGap: `${gap * 4}px`,
          columnGap: `${colGap * 4}px`,
        }}
        className="grid"
      >
        {contents.map((content, i) => (
          <ContentCard
            // height={itemHeight}
            content={content}
            key={i}
            isSeperateType
            onClick={() => onSelect?.(content.id)}
          />
        ))}
      </div>

      {pager?.(totalPages, isEnd)}
    </div>
  );
};

export default ContentList;
