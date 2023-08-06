// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { Content } from '../types/dto';
import { search_contents } from '@/features/common/temp';

interface TempResponse {
  content: Content[];
  totalElements: number;
}
export const getContents = (params: any): Promise<TempResponse> => {
  return Promise.resolve({ content: search_contents, totalElements: 102 });
  // return client.get(`/api/contents`, {params});
};

export const useContents = (params: any) => {
  const { data, ...rest } = useQuery({
    queryKey: ['contents', params],
    queryFn: () => getContents(params),
  });

  if (!data) throw data;

  return { contents: data.content, totalElements: data.totalElements, ...rest };
};
