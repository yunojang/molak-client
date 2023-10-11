import { FC, Suspense, useState } from 'react';
import { cx } from '@emotion/css';
import { useScrolled } from '../hooks/useScrolled';

import FilterButton from './FilterButton';
import Filters from './filters/Filters';
import { useDisclosure } from '@/hooks/useClosure';
import QuerPageTitle from './QueryPageTitle';
import HeaderLayout from './layout/headerLayout';

interface QueryHeaderProps {
  query: string;
  setFilter?(filter: any): void;
}

const QueryHeader: FC<QueryHeaderProps> = ({ query, setFilter }) => {
  const { isOpen: isOpenFilter, toggle: toggleFilter } = useDisclosure(false);
  const [isSet, setIsSetFilter] = useState(false);

  const handleChangeFilters = (filters: any, isInit?: boolean) => {
    setIsSetFilter(!isInit);
  };

  return (
    <HeaderLayout hasShadow top="isSecond" className={cx('px-space py-3')}>
      <div className="flex items-center gap-3">
        <QuerPageTitle query={query} />

        <FilterButton
          isOpen={isOpenFilter}
          onClick={toggleFilter}
          isActive={isSet}
        />
      </div>

      <div className="mt-1 overflow-hidden">
        {/* animation */}
        <div
          style={{
            marginTop: isOpenFilter ? '0px' : '-60px',
            transition: 'all 200ms cubic-bezier(0, 0, 0.5, 1)',
          }}
          className="py-2"
        >
          <Filters onChange={handleChangeFilters} />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default QueryHeader;
