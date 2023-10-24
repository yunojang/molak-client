import { FC, useMemo } from 'react';
import { withListLoadToScroll } from '@/components/List/withListLoadToScroll';

import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';
import ListCallToDomain from '@/components/List/ListCallToDomain';
import { relationTabs } from '../constant/tabs';

interface RelaltionContentListProps {
  tab: number;
  onSelect?(v: any, id: string): void;
}

const RelaltionContentList: FC<RelaltionContentListProps> = ({
  tab,
  onSelect,
}) => {
  const RelationContentsRoadToScroll = useMemo(
    () =>
      withListLoadToScroll({
        ListComp: ListCallToDomain,
        fallback: <SkeletonEpisodeList count={5} gap={4} />,
        filter: { size: 5 },
        gap: 4,
      }),
    [],
  );

  const relation = relationTabs[tab];

  return (
    <RelationContentsRoadToScroll
      domain={relation.domain}
      ViewComp={relation.ListView}
      onSelect={onSelect}
    />
  );
};

export default RelaltionContentList;
