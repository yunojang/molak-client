// query template
import { QueryOptions, useQuery } from '@/lib/react-query';

import client from '@/lib/client';
import { Content } from '../types/dto';

export const getNextEpisode = (episodeId: string): Promise<Content> => {
  // return new Promise(resolve => setTimeout(() => resolve(content3), 500));
  return client.get(`/api/v1/episode/${episodeId}/next/episode`);
};

export const useNextEpisode = (episodeId: string) => {
  const { data, ...rest } = useQuery<Content>({
    queryKey: ['next-episode', episodeId],
    queryFn: () => getNextEpisode(episodeId),
  });

  if (!data) throw () => getNextEpisode(episodeId);

  return {
    episode: (data as any).episode as Content,
    ...rest,
  };
};
