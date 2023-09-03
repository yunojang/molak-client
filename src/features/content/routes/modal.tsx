import { Route, Routes } from 'react-router-dom';

import ContentModal from '../../contentModal/components/ContentModal';

const ContentModalRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<ContentModal />} />
      <Route path="/:id/:episodeId" element={<ContentModal />} />
    </Routes>
  );
};

export default ContentModalRoutes;
