import { makeRoute } from '@/lib';
import Appframe from '@/routes/Appframe';

import Landing from './Landing';

const paths = {};

export const commonRoute = makeRoute({
  frame: <Appframe />,
  children: [{ path: '/', element: <Landing /> }],
});
