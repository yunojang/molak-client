import { FC } from 'react';

import { useQueryString } from '@/hooks/useQueryString';
import QueryHeader from '../components/QueryHeader';

interface QueryPageProps {
  _?: any;
}

const QueryPage: FC<QueryPageProps> = () => {
  const [query] = useQueryString('q');

  return (
    <div className="">
      <QueryHeader query={query} />

      <main className="h-[200vh]"></main>
    </div>
  );
};

export default QueryPage;
