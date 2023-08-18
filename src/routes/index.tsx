import { useAuth } from '@/features/auth/api/useAuth';
import { useBackgroundRoutes } from '@/hooks/useBackgroundRoutes';

import { protectedRoutes } from './protected';
import { commonRoutes } from '@/features/common';
import { publicRoutes } from './public';
import { coverRoutes } from './cover';

const AppRoute = () => {
  const { user } = useAuth();

  const routes = commonRoutes.concat(
    user ? protectedRoutes(user) : publicRoutes,
  );

  return useBackgroundRoutes(routes, coverRoutes);
};

export default AppRoute;
