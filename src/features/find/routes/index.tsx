import { Route, Routes } from 'react-router-dom';
import FindPage from './FindPage';

export const FindRoute = () => (
  <Routes>
    <Route path="/" element={<FindPage />} />
  </Routes>
);
