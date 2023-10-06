// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { RecommendFeed } from '../types/dto';
import { recommend_feeds } from '@/features/common/temp';

export const getMolakRecommendFeeds = (): Promise<RecommendFeed[]> => {
  return new Promise(resolve =>
    setTimeout(() => resolve(recommend_feeds), 100),
  );
  // return client.get(`/api/feeds`);
};

export const useRecommendFeeds = () => {
  const { data: recommend_feeds, ...rest } = useQuery({
    queryKey: ['feeds_reco'],
    queryFn: () => getMolakRecommendFeeds(),
  });

  return { feeds: recommend_feeds, ...rest };
};
