import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Appframe from './Appframe';
import { makeRoute } from '@/lib';

// const AdminRoute = lazy(() => import('@/features/admin'));
const AccountRoutes = lazy(() => import('@/features/account'));

const paths = {
  my: '/my/*',
  admin: '/admin/*',
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

export const protectedRoutes = (user: User) => [
  makeRoute({
    frame: <Appframe />,
    children: routes(user.userRole ?? 'USER'),
  }),
];
