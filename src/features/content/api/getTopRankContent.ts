import { QueryOptions, useQuery } from '@/lib/react-query';
import { ContentResponse } from '@/types';
import { getContents } from './getContents';

export const useTopRankContent = ({
  onSuccess,
  suspense = true,
}: QueryOptions<ContentResponse> = {}) => {
  const params = { order: 'popular', size: 8, offset: 0 };

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
