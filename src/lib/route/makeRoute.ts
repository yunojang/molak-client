import { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';

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
