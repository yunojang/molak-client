// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { Feed } from '../types/dto';
import { feeds } from '@/features/common/temp';

export const getFeeds = (): Promise<Feed[]> => {
  return new Promise(resolve => setTimeout(() => resolve(feeds), 1000));
  // return client.get(`/api/feeds`);
};

export const useFeeds = () => {
  const { data: feeds, ...rest } = useQuery({
    queryKey: ['feeds'],
    queryFn: () => getFeeds(),
  });

  return { feeds, ...rest };
};
