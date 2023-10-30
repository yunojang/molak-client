// query template
import { QueryOptions, useQuery } from '@/lib/react-query';

import { episodes, episodes2, search_contents } from '@/features/common/temp';
import { ContentResponse } from '@/types';
import client from '@/lib/client';

export const getListByDomain = (
  domain: string,
  params: any,
): Promise<ContentResponse> => {
  // return new Promise(resolve =>
  //   setTimeout(
  //     () =>
  //       resolve({
  //         content: domain === 'series' ? episodes : episodes2,
  //         totalElements: 250,
  //         totalPages: 5,
  //       }),
  //     500,
  //   ),
  // );

  return client.get(`/api/v1/${domain}`, { params });
};

export const useListByDomain = (
  domain: string,
  params: any = {},
  { onSuccess, suspense = true }: QueryOptions<ContentResponse> = {},
) => {
  const queryFn = () => getListByDomain(domain, params);

  const { data, ...rest } = useQuery({
    queryKey: ['list-content', domain, JSON.stringify(params)],
    queryFn,
    onSuccess,
    suspense,
  });

  if (!data && suspense) throw queryFn;

  const isEnd =
    data?.last ?? (data?.totalElements ?? 0) <= params.offset + params.size;

  return {
    data: data?.content ?? [],
    totalElements: data?.totalElements ?? 0,
    totalPages: data?.totalPages ?? 0,
    isEnd,
    ...rest,
  };
};
