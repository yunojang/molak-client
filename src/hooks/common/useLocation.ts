import { useMemo } from 'react';
import {
  useLocation as useLocationOrigin,
  useSearchParams,
} from 'react-router-dom';

export const useLocation = () => {
  const [search] = useSearchParams();
  const location = useLocationOrigin();
  const params = useMemo(() => getAllQueryParams(search), [search]);

  return {
    params,
    ...location,
  };
};

const getAllQueryParams = (search: URLSearchParams) => {
  const searchParams: any = {};
  for (const [key, value] of search.entries()) searchParams[key] = value;
  return searchParams;
};
