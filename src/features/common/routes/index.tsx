import Appframe from '@/routes/Appframe';
import { makeRoute } from '@/lib/route/makeRoute';

import Landing from './Landing';
import { _lazy } from '@/utils/lazy';

const AboutRoute = _lazy(() => import('@/features/about'));
const FindRoute = _lazy(() => import('@/features/find'));
const ContentRoute = _lazy(() => import('@/features/content'));

const paths = {
  find: '/find/*',
  content: '/content/*',
  // all: '/*',
};

export const commonRoutes = [
  makeRoute({
    frame: <Appframe />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/about', element: <AboutRoute /> },
      { path: paths.content, element: <ContentRoute /> },
    ],
  }),
  makeRoute({
    frame: <Appframe hasFooter={false} />,
    children: [{ path: paths.find, element: <FindRoute /> }],
  }),
];
