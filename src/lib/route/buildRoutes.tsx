import { Route, RouteObject } from 'react-router-dom';

export const buildRoutes = (routes: RouteObject[]) => (
  <>
    {routes.map((route, idx) => (
      <Route key={idx} path={route.path} element={route.element}>
        {buildRoutes(route.children ?? [])}
      </Route>
    ))}
  </>
);
