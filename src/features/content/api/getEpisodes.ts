// query template
import client from '@/lib/client';
import { QueryOptions, useQuery } from '@/lib/react-query';

import { Content } from '../types/dto';
import { episodes, episodes2 } from '@/features/common/temp';

interface TempResponse {
  content: Content[];
  totalElements: number;
  totalPages: number;
}

export const getEpisodes = (id: string, params: any): Promise<TempResponse> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          content: params.offset < 10 ? episodes : episodes2,
          totalElements: 25,
          totalPages: 2,
        }),
      500,
    ),
  );
  // return client.get(`/api/episodes/${id}`, {params});
};

export const useEpisodes = (
  id: string,
  params: any = {},
  { onSuccess, suspense = true }: QueryOptions<TempResponse> = {},
) => {
  const { data, ...rest } = useQuery({
    queryKey: ['episodes', id, JSON.stringify(params)],
    queryFn: () => getEpisodes(id, params),
    onSuccess,
    suspense,
  });

  if (!data && suspense) throw () => getEpisodes(id, params);

  return {
    episodes: data?.content ?? [],
    totalElements: data?.totalElements ?? 0,
    totalPages: data?.totalPages ?? 0,
    isEnd: data
      ? data.totalElements <= params.offset + params.size // 다음 요청에 크거나 같아지면, end
      : false,
    ...rest,
  };
};
