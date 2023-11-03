import { FC, useContext, useMemo } from 'react';
import { withListLoadToScroll } from '@/components/List/withListLoadToScroll';

import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';
import ListCallToDomain from '@/components/List/ListCallToDomain';
import { relationTabs } from '../constant/tabs';
import { ContentInfoContext } from '@/features/contentModal/store/ContentIdContext';

interface RelaltionContentListProps {
  tab: number;
  onSelect?(v: any, id: string): void;
}

const RelaltionContentList: FC<RelaltionContentListProps> = ({
  tab,
  onSelect,
}) => {
  const gap = 6;
  const { contentId } = useContext(ContentInfoContext);

  const RelationContentsRoadToScroll = useMemo(
    () =>
      withListLoadToScroll({
        ListComp: ListCallToDomain,
        fallback: <SkeletonEpisodeList count={6} gap={gap} />,
        filter: { size: 6 },
        gap,
      }),
    [],
  );

  const relation = relationTabs[tab];
  const domain = relation.domain.replace('{id}', contentId);

  return (
    <RelationContentsRoadToScroll
      domain={domain}
      ViewComp={relation.ListView}
      onSelect={onSelect}
    />
  );
};

export default RelaltionContentList;
