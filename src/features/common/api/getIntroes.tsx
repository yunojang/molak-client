// query template
import { useQuery } from '@/lib/react-query';

import { introes } from '../temp';
import { Intro } from '../types/dto';

export const getIntro = (): Promise<Intro[]> => {
  return Promise.resolve(introes);
  // return client.get(`/api/feeds`);
};

export const useIntro = () => {
  const { data: intro, ...rest } = useQuery({
    queryKey: ['introes'],
    queryFn: () => getIntro(),
  });

  return { intro, ...rest };
};
