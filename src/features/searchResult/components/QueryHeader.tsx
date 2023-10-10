import { FC } from 'react';
import { cx } from '@emotion/css';
import { useScrolled } from '../hooks/useScrolled';

import FilterButton from './FilterButtont';

interface QueryHeaderProps {
  query: string;
}

const QueryHeader: FC<QueryHeaderProps> = ({ query }) => {
  const { isTop } = useScrolled();

  return (
    <header
      className={cx(
        isTop ? '' : 'shadow-sm',
        'flex items-center gap-3 sticky top-header left-0 px-space py-3',
      )}
    >
      <div className="font-bold text-3xl">
        <span>{`'${query}' `}</span>
        <span className="text-gray-500">검색 결과</span>
      </div>

      <FilterButton />
    </header>
  );
};

export default QueryHeader;
