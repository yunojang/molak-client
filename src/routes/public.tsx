import { Navigate } from 'react-router-dom';

import { _lazy } from '@/utils/lazy';
import { makeRoute } from '@/lib/route/makeRoute';

const AuthRoutes = _lazy(() => import('@/features/auth'));

const paths = {
  auth: '/auth/*',
};

const children = [
  { path: paths.auth, element: <AuthRoutes /> },
  // { path: '*', element: <Navigate to="/" /> },
];

export const publicRoutes = [makeRoute({ children })];
