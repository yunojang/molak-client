import { FC, useMemo, useState } from 'react';

import { useQueryString } from '@/hooks/useQueryString';
import QueryHeader from '../components/QueryHeader';
import QueriedContentList from '../components/QueriedContentList';

interface QueryPageProps {
  _?: any;
}

const QueryResultPage: FC<QueryPageProps> = () => {
  const [keyword] = useQueryString('q');
  const [filter, setFilter] = useState<any>({});

  const allFilter = useMemo(() => ({ ...filter, keyword }), [filter, keyword]);

  return (
    <div>
      {/* setfilter */}
      <QueryHeader query={keyword} onChangeFilter={setFilter} />
      <QueriedContentList filter={allFilter} />
    </div>
  );
};

export default QueryResultPage;
