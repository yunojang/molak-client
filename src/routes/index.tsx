import { useRoutes } from 'react-router-dom';

import { useAuth } from '@/features/auth/api/useAuth';

import { protectedRoutes } from './protected';
import { commonRoutes } from '@/features/common';
import { publicRoutes } from './public';

const AppRoute = () => {
  const { user } = useAuth();

  const routes = user ? protectedRoutes(user) : publicRoutes;
  return useRoutes([...commonRoutes, ...routes]);
};

export default AppRoute;
