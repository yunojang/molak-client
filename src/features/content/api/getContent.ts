// query template
import client from '@/lib/client';
import { QueryOptions, useQuery } from '@/lib/react-query';

import { Content } from '../types/dto';
import { content, content2 } from '@/features/common/temp';

export const getContent = (id: string): Promise<Content> => {
  return new Promise(resolve =>
    setTimeout(() => resolve(+id > 1 ? content : content2), 500),
  );
  // return client.get(`/api/content/${id}`);
};

export const useContent = (
  id: string,
  opt: QueryOptions = { suspense: true },
) => {
  const { data, ...rest } = useQuery({
    queryKey: ['content', id],
    queryFn: () => getContent(id),
    ...opt,
  });

  if (!data && opt.suspense) throw () => getContent(id);

  return {
    content: data,
    ...rest,
  };
};
