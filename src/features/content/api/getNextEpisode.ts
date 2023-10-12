// query template
import { QueryOptions, useQuery } from '@/lib/react-query';

import client from '@/lib/client';
import { Content } from '../types/dto';
import { content3 } from '@/features/common/temp';

export const getNextEpisode = (episodeId: string): Promise<Content> => {
  return new Promise(resolve => setTimeout(() => resolve(content3), 500));
  // return client.get(`/api/content/${id}`);
};

export const useNextEpisode = (episodeId: string) => {
  const { data, ...rest } = useQuery<Content>({
    queryKey: ['next-episode', episodeId],
    queryFn: () => getNextEpisode(episodeId),
  });

  if (!data) throw () => getNextEpisode(episodeId);

  return {
    episode: data,
    ...rest,
  };
};
