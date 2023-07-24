import { Navigate } from 'react-router-dom';

import { makeRoute } from '@/lib';
import { _lazy } from '@/utils/lazy';

const AuthRoutes = _lazy(() => import('@/features/auth'));

const paths = {
  auth: '/auth/*',
};

const children = [
  { path: paths.auth, element: <AuthRoutes /> },
  { path: '*', element: <Navigate to="/auth/login" /> },
];

export const publicRoutes = [makeRoute({ children })];
