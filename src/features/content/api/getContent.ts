// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { Content } from '../types/dto';
import { content } from '@/features/common/temp';

export const getContent = (id: string): Promise<Content> => {
  return new Promise(resolve => setTimeout(() => resolve(content), 500));
  // return client.get(`/api/content/${id}`);
};

export const useContent = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ['content', id],
    queryFn: () => getContent(id),
  });

  if (!data) throw () => getContent(id);

  return {
    content: data,
    ...rest,
  };
};
