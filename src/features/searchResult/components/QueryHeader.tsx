import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { useDisclosure } from '@/hooks/useClosure';

import FilterButton from './FilterButton';
import Filters from './filters/Filters';
import QuerPageTitle from './QueryPageTitle';
import HeaderLayout from './layout/headerLayout';

interface QueryHeaderProps {
  query: string;
  onChangeFilter?(filter: any): void;
}

const QueryHeader: FC<QueryHeaderProps> = ({ query, onChangeFilter }) => {
  const { isOpen: isOpenFilter, toggle: toggleFilter } = useDisclosure(false);
  const [isSet, setIsSetFilter] = useState(false);

  const handleChangeFilters = (filters: any, isInit?: boolean) => {
    onChangeFilter?.(filters);
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

      {/* animation */}
      <div className="mt-1 overflow-hidden">
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
