import { Routes } from 'react-router-dom';

import { useAuth } from '@/features/auth/api/useAuth';

import { authRoutes } from './auth';
import { commonRoutes } from '@/Admin/features/common/routes';
import { buildRoutes } from '@/lib/route/buildRoutes';

const AdminRoutes = () => {
  const { user } = useAuth();
  const routes = user ? commonRoutes : authRoutes;

  return <Routes>{buildRoutes(routes)}</Routes>;
};

export default AdminRoutes;
