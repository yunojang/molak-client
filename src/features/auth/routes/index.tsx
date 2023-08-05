import { Route, Routes } from 'react-router-dom';

import LoginPage from '../features/login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
