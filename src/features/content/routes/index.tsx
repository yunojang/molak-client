import { Route, Routes } from 'react-router-dom';
import ContentModal from '../../contentModal/components/ContentModal';

export const ContentRoute = () => {
  return (
    <Routes>
      <Route path="/:id" element={<ContentModal />} />
    </Routes>
  );
};
