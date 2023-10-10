import { FC, useMemo, useState } from 'react';

import { useQueryString } from '@/hooks/useQueryString';
import QueryHeader from '../components/QueryHeader';
import QueriedContentList from '../components/QueriedContentList';

interface QueryPageProps {
  _?: any;
}

const QueryPage: FC<QueryPageProps> = () => {
  const [query] = useQueryString('q');
  const [filter, setFilter] = useState<any>({});

  const allFilter = useMemo(() => ({ ...filter, query }), [filter, query]);

  return (
    <div>
      <QueryHeader query={query} />
      <QueriedContentList filter={allFilter} />
    </div>
  );
};

export default QueryPage;
