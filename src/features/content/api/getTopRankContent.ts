import { QueryOptions, useQuery } from '@/lib/react-query';
import { ContentResponse } from '@/types';
import { getContents } from './getContents';

export const useTopRankContent = ({
  onSuccess,
  suspense = true,
}: QueryOptions<ContentResponse> = {}) => {
  const params = {
    // order: 'popular',
    size: 8,
    page: 0,
  };

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
    isEnd: data?.last,
    ...rest,
  };
};
