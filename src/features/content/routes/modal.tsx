import { Route, Routes } from 'react-router-dom';

import ContentModal from '../components/ContentModal';

const ContentModalRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<ContentModal />} />
    </Routes>
  );
};

export default ContentModalRoutes;
