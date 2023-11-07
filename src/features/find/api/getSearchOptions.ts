// query template
import client from '@/lib/client';
import { useQuery } from '@/lib/react-query';

import { Discover } from '../types';

export const getSearchOptions = (): Promise<Discover> => {
  // return Promise.resolve(discover);
  return client.get(`/api/v1/search/options`);
};

export const useSearchOptions = () => {
  const { data: discover, ...rest } = useQuery({
    queryKey: ['discover'],
    queryFn: () => getSearchOptions(),
  });

  if (!discover) throw getSearchOptions;

  return { discover, genres: discover.genres, ...rest };
};
