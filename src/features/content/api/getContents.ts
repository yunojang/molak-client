// query template
import { QueryOptions, useQuery } from '@/lib/react-query';

import { ContentResponse, PagerableContent } from '@/types';
import client from '@/lib/client';
import { formatParams } from '@/utils/format/params';
import { Content } from '../types/dto';

export const getContents = (
  params: any,
): Promise<PagerableContent<Content>> => {
  // return new Promise(resolve =>
  //   setTimeout(
  //     () =>
  //       resolve({
  //         content: search_contents,
  //         totalElements: 250,
  //         totalPages: 5,
  //         last: false,
  //       }),
  //     500,
  //   ),

  // );

  return client.get(`/api/v1/search`, { params: formatParams(params) });
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
    data?.last ?? (data?.totalElements ?? 0) <= params.offset + params.size;

  return {
    contents: data?.content ?? [],
    totalElements: data?.totalElements ?? 0,
    totalPages: data?.totalPages ?? 0,
    isEnd,
    ...rest,
  };
};
