import { FC, useMemo } from 'react';

import { useCardCount } from '@/features/content/hooks/useCardCount';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { withScrollLoad } from '@/components/List/withScrollLoad';

import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import AccumulateContentList from '@/features/content/components/AccumulateContentList';

interface FindContentListProps {
  filter: any;
}

const FindContentList: FC<FindContentListProps> = ({ filter }) => {
  const navigate = useNavigateWithBg();
  const count = Math.floor(useCardCount().count / 2) * 2;

  // warpper를 생성하는 컴포넌트가 다시 렌더링 될 때 아예 새로운 컴포넌트를 생성한다. -> useMemo
  const ContentList = useMemo(
    () =>
      withScrollLoad({
        ListComp: AccumulateContentList,
        filter,
        className: 'h-full flex-1 pb-10',
        hasTitle: true,
        fallback: (
          <div className="mt-20">
            <SkeletonContentCardList
              columnCount={count}
              count={4}
              gap={5}
              rowGap={20}
              isCard
            />
          </div>
        ),
      }),
    [filter, count],
  );
  return (
    <ContentList
      columnCount={count}
      onSelect={id => navigate(`/content/${id}`)}
    />
  );
};

export default FindContentList;
