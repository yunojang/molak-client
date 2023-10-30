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
  const gap = 6;

  const RelationContentsRoadToScroll = useMemo(
    () =>
      withListLoadToScroll({
        ListComp: ListCallToDomain,
        fallback: <SkeletonEpisodeList count={8} gap={gap} />,
        filter: { size: 8 },
        gap,
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
