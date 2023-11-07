// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { RecommendFeed } from '../types/dto';
import { recommend_feeds } from '@/features/common/temp';

export const getMolakRecommendFeeds = (): Promise<RecommendFeed> => {
  // return new Promise(resolve =>
  //   setTimeout(() => resolve(recommend_feeds[0]), 100),
  // );
  return client.get(`/api/v1/feed/recommendation`);
};

export const useRecommendFeeds = () => {
  const { data: feed, ...rest } = useQuery({
    queryKey: ['recommend_feeds'],
    queryFn: () => getMolakRecommendFeeds(),
  });

  if (!feed) throw () => getMolakRecommendFeeds();

  return { feed, ...rest };
};
