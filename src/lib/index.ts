import { ReactElement } from 'react';
import {
  NavigateOptions,
  RouteObject,
  URLSearchParamsInit,
  useSearchParams as useSearchParamsOrigin,
} from 'react-router-dom';

interface MakeRouterProps {
  path?: string;
  frame?: ReactElement;
  children?: RouteObject[];
  notfoundFallback?: ReactElement;
}

export const makeRoute = ({
  path = '/',
  frame,
  children = [],
  notfoundFallback,
}: MakeRouterProps = {}) => {
  const route: RouteObject = { path, element: frame };

  route.children = notfoundFallback
    ? [...children, { path: '*', element: notfoundFallback }]
    : children;

  return route;
};

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
