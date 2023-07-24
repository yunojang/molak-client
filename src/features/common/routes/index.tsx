import { makeRoute } from '@/lib';
import Appframe from '@/routes/Appframe';

const paths = {};

export const commonRoute = makeRoute({
  frame: <Appframe />,
  children: [],
});
