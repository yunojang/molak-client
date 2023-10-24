// query template
import { QueryOptions, useQuery } from '@/lib/react-query';

import { search_contents } from '@/features/common/temp';
import { ContentResponse } from '@/types';

export const getContents = (params: any): Promise<ContentResponse> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          content: search_contents,
          totalElements: 250,
          totalPages: 5,
          isEnd: false,
        }),
      500,
    ),
  );

  // return client.get(`/api/contents`, {params});
};

export const useContents = (
  params: any = { size: 10 },
  { onSuccess, suspense = true }: QueryOptions<ContentResponse> = {},
) => {
  const { data, ...rest } = useQuery({
    queryKey: ['contents', JSON.stringify(params)],
    queryFn: () => getContents(params),
    onSuccess,
    suspense,
  });

  if (!data && suspense) throw () => getContents(params);

  const isEnd =
    data?.isEnd ?? (data?.totalElements ?? 0) <= params.offset + params.size;

  return {
    contents: data?.content ?? [],
    totalElements: data?.totalElements ?? 0,
    totalPages: data?.totalPages ?? 0,
    isEnd,
    ...rest,
  };
};
