import { Route, Routes } from 'react-router-dom';

import SearchPage from './SearchPage';

export const SearchRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
    </Routes>
  );
};
