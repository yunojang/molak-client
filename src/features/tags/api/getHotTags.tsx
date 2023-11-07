// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { HotTag } from '../types/dto';
import { hot_tagas } from '@/features/common/temp';

export const getHotTags = (): Promise<HotTag[]> => {
  return Promise.resolve(hot_tagas);
  // return new Promise(resolve => setTimeout(() => resolve(hot_tagas), 500));
  // return client.get(`/api/hot-tags`);
};

export const useHotTags = () => {
  const { data: tags, ...rest } = useQuery({
    queryKey: ['tags'],
    queryFn: () => getHotTags(),
  });

  return { tags, ...rest };
};
