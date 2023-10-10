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
        }),
      500,
    ),
  );
  // return client.get(`/api/contents`, {params});
};

export const useContents = (
  params: any = {},
  { onSuccess, suspense = true }: QueryOptions<ContentResponse> = {},
) => {
  const { data, ...rest } = useQuery({
    queryKey: ['contents', JSON.stringify(params)],
    queryFn: () => getContents(params),
    onSuccess,
    suspense,
  });

  if (!data && suspense) throw () => getContents(params);

  return {
    contents: data?.content ?? [],
    totalElements: data?.totalElements ?? 0,
    totalPages: data?.totalPages ?? 0,
    isEnd: data
      ? data.totalElements <= params.offset + params.size // 다음 요청에 크거나 같아지면, isEnd // ? data.totalElements <= params.page + 1
      : false,
    ...rest,
  };
};
