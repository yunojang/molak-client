// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { Content } from '../types/dto';
import { search_contents } from '@/features/common/temp';

interface TempResponse {
  content: Content[];
  totalElements: number;
  totalPages: number;
}

export const getContents = (params: any): Promise<TempResponse> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          content: search_contents,
          totalElements: 102,
          totalPages: 10,
        }),
      1000,
    ),
  );
  // return client.get(`/api/contents`, {params});
};

interface Options {
  suspense?: boolean;
  onSuccess?: (response: TempResponse) => void;
}

export const useContents = (
  params: any = {},
  { onSuccess, suspense = true }: Options = {},
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
      ? data.totalElements <= params.offset + params.size // 다음 요청에 크거나 같아지면, end
      : false,
    ...rest,
  };
};
