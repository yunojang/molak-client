import {
  NavigateOptions,
  URLSearchParamsInit,
  useSearchParams as useSearchParamsOrigin,
} from 'react-router-dom';

type SetURLSearchParams = (
  nextInit?: URLSearchParamsInit | ((prev: object) => any),
  navigateOpts?: NavigateOptions,
) => void;

export const useSearchParams = (): [URLSearchParams, SetURLSearchParams] => {
  const [search, setSearch] = useSearchParamsOrigin();

  const setSearchWrapper: SetURLSearchParams = (next, opts) => {
    if (typeof next === 'function') {
      const prev: any = {};
      for (const [k, v] of search.entries()) {
        prev[k] = v;
      }

      // call next
      setSearch(next(prev), opts);
    }

    setSearch(next, opts);
  };

  return [search, setSearchWrapper];
};
