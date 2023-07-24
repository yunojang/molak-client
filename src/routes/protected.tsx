import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Appframe from './Appframe';
import { makeRoute } from '@/lib';

// const AdminRoute = lazy(() => import('@/features/admin'));
const AccountRoutes = lazy(() => import('@/features/account'));

const paths = {
  // admin: '/admin/*',
  my: '/my/*',
};

const routes = (role: string) => {
  const children: RouteObject[] = [
    { path: paths.my, element: <AccountRoutes /> },
  ];

  // if (role === 'ADMIN') {
  //   children.push({
  //     path: paths.admin,
  //     element: <AdminRoute />,
  //   });
  // }

  return children;
};

interface Roleable {
  role: string;
}

export const protectedRoutes = (user: Roleable) => [
  makeRoute({
    frame: <Appframe />,
    children: routes(user.role ?? 'USER'),
  }),
];
