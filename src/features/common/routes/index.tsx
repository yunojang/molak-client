import { makeRoute } from '@/lib';
import Appframe from '@/routes/Appframe';

import Landing from './Landing';
import { _lazy } from '@/utils/lazy';

const AboutRoute = _lazy(() => import('@/features/about'));

const paths = {
  find: '/find/*',
  content: '/content/*',
};

export const commonRoute = makeRoute({
  frame: <Appframe />,
  children: [
    { path: '/', element: <Landing /> },
    { path: '/about', element: <AboutRoute /> },
    { path: paths.find, element: <Landing /> },
    { path: paths.content, element: <Landing /> },
  ],
});
