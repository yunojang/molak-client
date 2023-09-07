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

  const isCoverLocation = bgLocation || location.pathname.startsWith(coverPath);
  const bgl = bgLocation ?? '/';

  return (
    <>
      <Routes location={isCoverLocation ? bgl : location}>
        {buildRoutes(routes)}
      </Routes>
      {isCoverLocation && <Routes>{buildRoutes(coverRoutes)}</Routes>}
    </>
  );
};
