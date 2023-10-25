// query template
import { QueryOptions, useQuery } from '@/lib/react-query';

import client from '@/lib/client';
import { Content } from '@/features/content/types/dto';

export const getEpisode = (id: string): Promise<Content> => {
  return client.get(`/api/v1/episode/${id}`);
};

export const useEpisode = (
  id: string,
  opt: QueryOptions = { suspense: true },
) => {
  const { data, ...rest } = useQuery<Content>({
    queryKey: ['content', id],
    queryFn: () => getEpisode(id),
    ...opt,
  });

  if (!data && opt.suspense) throw () => getEpisode(id);

  return {
    content: data,
    ...rest,
  };
};
