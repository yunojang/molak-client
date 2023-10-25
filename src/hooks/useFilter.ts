import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from './common/useLocation';

export const useFilter = <T extends object>(
  defaultValue: Partial<T> = {} as T,
): [Partial<T>, (f: Partial<T>) => void] => {
  // const [page] = useQueryString('page', '1');
  const [_, setSearch] = useSearchParams();
  const { params } = useLocation();

  // set default value to search
  const [filterObject, setFilterObject] = useState<Partial<T>>({
    ...defaultValue,
    ...params,
  });

  const setFilter = (f: Partial<T>) => {
    // base default, base current url -> override by new filter value
    const newFilterValues = { ...defaultValue, ...params, ...f };
    setFilterObject(newFilterValues);
    setSearch({ ...newFilterValues, page: '1' });
  };

  return [
    Object.entries(filterObject)
      .filter(([, v]) => v && v !== 'ALL')
      .reduce(
        (acc, [k, v]) => ({ ...acc, [k]: v }),
        {},
      ) as unknown as Partial<T>,
    setFilter,
  ];
};
