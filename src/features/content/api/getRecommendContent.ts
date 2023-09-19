// query template
import { QueryOptions, useQuery } from '@/lib/react-query';

import { recommend_contents } from '@/features/common/temp';
import { ContentResponse } from '@/types';

export const getRecommendContents = (params: any): Promise<ContentResponse> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          content: recommend_contents,
          totalElements: 8,
          totalPages: 1,
        }),
      500,
    ),
  );
  // return client.get(`/api/contents/recommend`, {params});
};

export const useRecommendContents = (
  params: any = { size: 8, offset: 0 },
  { onSuccess, suspense = true }: QueryOptions<ContentResponse> = {},
) => {
  const { data, ...rest } = useQuery({
    queryKey: ['recommend_cotents', JSON.stringify(params)],
    queryFn: () => getRecommendContents(params),
    onSuccess,
    suspense,
  });

  if (!data && suspense) throw () => getRecommendContents(params);

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
