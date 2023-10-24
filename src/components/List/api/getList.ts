// query template
import { QueryOptions, useQuery } from '@/lib/react-query';

import { episodes, episodes2, search_contents } from '@/features/common/temp';
import { ContentResponse } from '@/types';

export const getListByDomain = (
  domain: string,
  params: any,
): Promise<ContentResponse> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          content: domain === 'series' ? episodes : episodes2,
          totalElements: 250,
          totalPages: 5,
        }),
      500,
    ),
  );

  // return client.get(`/api/${domain}`, {params});
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

  return {
    data: data?.content ?? [],
    totalElements: data?.totalElements ?? 0,
    totalPages: data?.totalPages ?? 0,
    isEnd: data
      ? data.totalElements <= params.offset + params.size // 다음 요청에 크거나 같아지면, isEnd // ? data.totalElements <= params.page + 1
      : false,
    ...rest,
  };
};
