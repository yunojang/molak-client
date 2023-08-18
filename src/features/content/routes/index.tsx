import { Route, Routes } from 'react-router-dom';
import ContentModal from '../components/ContentModal';

export const ContentRoute = () => (
  <Routes>
    <Route path="/:id" element={<ContentModal />} />
  </Routes>
);
