import { _lazy } from '@/utils/lazy';
import { makeRoute } from '@/lib/route/makeRoute';

const path = {
  content: '/content/*',
};

import ContentModalRoute from '@/features/content/routes/modal';

const children = [{ path: path.content, element: <ContentModalRoute /> }];

export const coverRoutes = [makeRoute({ children })];
