import { FC } from 'react';

import { useListByDomain } from './api/getList';
import { InfiniteListProps, ViewListProps } from './types';

export interface ListCallToDomainProps extends InfiniteListProps {
  domain: string;
  ViewComp: FC<ViewListProps>;
  onSelect?(item: any, id: string): void;
}

const ListCallToDomain: FC<ListCallToDomainProps> = ({
  ViewComp,
  domain,
  params,
  pager,
  gap = 0,
  onSelect,
}) => {
  const { data, totalPages, isEnd } = useListByDomain(domain, params);

  return (
    <>
      <ViewComp data={data} gap={gap} onSelect={onSelect} />
      {pager?.(totalPages, isEnd)}
    </>
  );
};

export default ListCallToDomain;
