import { FC, useMemo } from 'react';

import { useCardCount } from '@/features/content/hooks/useCardCount';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import AccumulateContentList from '@/features/content/components/AccumulateContentList';
import { withScrollLoad } from '@/components/List/withScrollLoad';

interface QueriedContentListProps {
  filter?: any;
}

const QueriedContentList: FC<QueriedContentListProps> = ({ filter }) => {
  const naviage = useNavigateWithBg();
  const count = Math.floor(useCardCount().count / 2) * 2;

  const ContentList = useMemo(
    () =>
      withScrollLoad({
        ListComp: AccumulateContentList,
        filter,
        fallback: (
          <div className="mt-20">
            <SkeletonContentCardList count={4} gap={5} isCard />
          </div>
        ),
      }),
    [filter],
  );

  return (
    <div className="px-space py-5">
      <ContentList
        columnCount={count}
        onSelect={id => naviage(`/content/${id}`)}
      />
    </div>
  );
};

export default QueriedContentList;
