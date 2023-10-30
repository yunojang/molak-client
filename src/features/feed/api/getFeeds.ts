// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { Feed } from '../types/dto';
import { PagerableContent } from '@/types';

export const getFeeds = (): Promise<PagerableContent<Feed>> => {
  // return new Promise(resolve => setTimeout(() => resolve(feeds), 1000));
  return client.get(`/api/v1/feed`);
};

export const useFeeds = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['feeds'],
    queryFn: () => getFeeds(),
  });

  if (!data) throw () => getFeeds();

  return { feeds: data.content, ...rest };
};
