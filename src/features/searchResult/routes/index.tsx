import { Route, Routes } from 'react-router-dom';

import QueryPage from './QueryPage';

export const QueryRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<QueryPage />} />
    </Routes>
  );
};
