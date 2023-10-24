import { Route, Routes } from 'react-router-dom';

import QueryResultPage from './QueryResultPage';

export const QueryRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<QueryResultPage />} />
    </Routes>
  );
};
