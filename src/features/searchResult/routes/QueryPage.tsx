import { FC, useState } from 'react';

import { useQueryString } from '@/hooks/useQueryString';
import QueryHeader from '../components/QueryHeader';
import QueriedContentList from '../components/QueriedContentList';

interface QueryPageProps {
  _?: any;
}

const QueryPage: FC<QueryPageProps> = () => {
  const [query] = useQueryString('q');
  const [filter, setFilter] = useState<any>({});

  return (
    <div>
      <QueryHeader query={query} />
      <QueriedContentList filter={{ ...filter, query }} />
    </div>
  );
};

export default QueryPage;
