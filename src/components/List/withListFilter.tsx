import { FC, Suspense } from 'react';

import { useFilter } from '@/hooks/useFilter';
import { useLocation } from '@/hooks/useLocation';
import { useBreakPoint } from '@/utils/breakpoint';
import { ListCompProps, withScrollLoad } from './withScrollLoad';
import SpinnerPage from '../Elements/Spinner/SpinnerPage';

export interface FilterableListProps extends ListCompProps {
  parmas?: any;
}

export interface FilterProps {
  defaultValues?: any;
  onSubmit?(v: any): void;
  columnCount?: number;
}

interface ListFilterProps {
  gap?: number;
  onSelect?(id: string): void;
}

export const withListFilter = (
  ListComp: FC<FilterableListProps>,
  FilterComp?: FC<FilterProps>,
) => {
  return function Inner({ gap, ...props }: ListFilterProps) {
    const { params: url_params } = useLocation();
    const [filter, setFilter] = useFilter({ ...url_params });

    const DecoratedList = withScrollLoad(ListComp, filter);

    const col = useBreakPoint(p => (p.bigger('lg') ? 3 : 1));

    return (
      <div className="flex flex-col" style={{ gap }}>
        {FilterComp && (
          <FilterComp
            columnCount={col}
            defaultValues={url_params}
            onSubmit={setFilter}
          />
        )}

        <Suspense fallback={<SpinnerPage />}>
          <DecoratedList {...props} />
        </Suspense>
      </div>
    );
  };
};
