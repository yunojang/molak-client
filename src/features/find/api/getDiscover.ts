// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { discover } from '@/features/common/temp';
import { Discover } from '../types';

export const getDiscover = (): Promise<Discover> => {
  return Promise.resolve(discover);
  // return new Promise(resolve => setTimeout(() => resolve(discover), 500));
  // return client.get(`/api/discover`);
};

export const useDiscover = () => {
  const { data: discover, ...rest } = useQuery({
    queryKey: ['discover'],
    queryFn: () => getDiscover(),
  });

  if (!discover) throw getDiscover;

  return { discover, genres: discover.genres, ...rest };
};
