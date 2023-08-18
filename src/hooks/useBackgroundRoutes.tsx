import { RouteObject, Routes } from 'react-router-dom';

import { useBackgroundLocation } from './useBackgroundLocation';
import { buildRoutes } from '@/lib/route/buildRoutes';

export const useBackgroundRoutes = (
  routes: RouteObject[] = [],
  coverRoutes: RouteObject[] = [],
) => {
  const bgLocation = useBackgroundLocation();

  return (
    <>
      <Routes location={bgLocation ?? location}>{buildRoutes(routes)}</Routes>
      <Routes>{buildRoutes(coverRoutes)}</Routes>
    </>
  );
};
