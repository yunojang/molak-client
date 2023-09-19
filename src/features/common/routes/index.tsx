import Appframe from '@/routes/Appframe';
import { makeRoute } from '@/lib/route/makeRoute';

import Landing from './Landing';
import { _lazy } from '@/utils/lazy';

const AboutRoute = _lazy(() => import('@/features/about'));
const FindRoute = _lazy(() => import('@/features/find'));
const SearchRoute = _lazy(() => import('@/features/search'));

const paths = {
  find: '/find/*',
  search: '/search/*',
  about: '/about/*',
};

export const commonRoutes = [
  makeRoute({
    frame: <Appframe />,
    children: [
      { path: '/', element: <Landing /> },
      { path: paths.search, element: <SearchRoute /> },
      { path: paths.about, element: <AboutRoute /> },
    ],
  }),
  // no footer
  makeRoute({
    frame: <Appframe hasFooter={false} />,
    children: [{ path: paths.find, element: <FindRoute /> }],
  }),
];
