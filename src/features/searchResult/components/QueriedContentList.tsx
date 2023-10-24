import { FC, useMemo } from 'react';

import { useCardCount } from '@/features/content/hooks/useCardCount';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import { withListLoadToScroll } from '@/components/List/withListLoadToScroll';
import ContentList from '@/features/content/components/ContentList';
import { ListResultTitle } from '@/components/List/ListTitle';

interface QueriedContentListProps {
  filter?: any;
}

const QueriedContentList: FC<QueriedContentListProps> = ({ filter }) => {
  const naviage = useNavigateWithBg();
  const count = Math.floor(useCardCount().count / 2) * 2;

  const QueriedContentsLoadToScroll = useMemo(
    () =>
      withListLoadToScroll({
        ListComp: ContentList,
        filter,
        gap: 20,
        fallback: (
          <SkeletonContentCardList
            count={4}
            gap={5}
            rowGap={20}
            columnCount={count}
            isCard
          />
        ),
      }),
    [filter, count],
  );

  return (
    <div className="px-space py-5">
      <QueriedContentsLoadToScroll
        title={(cnt, page) =>
          page == 1 ? <ListResultTitle cnt={cnt} mb={5} /> : null
        }
        columnCount={count}
        onSelect={id => naviage(`/content/${id}`)}
      />
    </div>
  );
};

export default QueriedContentList;
