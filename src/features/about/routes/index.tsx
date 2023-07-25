import { Route, Routes } from 'react-router-dom';
import AboutPage from '../components/AboutPAge';

export const AboutRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
    </Routes>
  );
};
