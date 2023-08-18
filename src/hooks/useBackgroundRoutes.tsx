import { RouteObject, Routes, useLocation } from 'react-router-dom';

import { useBackgroundLocation } from './useBackgroundLocation';
import { buildRoutes } from '@/lib/route/buildRoutes';

const coverPath = '/content/';

export const useBackgroundRoutes = (
  routes: RouteObject[] = [],
  coverRoutes: RouteObject[] = [],
) => {
  const location = useLocation();
  const bgLocation = useBackgroundLocation();
  const isCoverLocation = location.pathname.startsWith(coverPath);

  return (
    <>
      <Routes location={bgLocation ?? (isCoverLocation ? '/' : location)}>
        {buildRoutes(routes)}
      </Routes>
      {(isCoverLocation || bgLocation) && (
        <Routes>{buildRoutes(coverRoutes)}</Routes>
      )}
    </>
  );
};
