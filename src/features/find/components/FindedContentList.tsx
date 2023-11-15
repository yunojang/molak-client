import { FC, useMemo } from 'react';

import { useCardCount } from '@/features/content/hooks/useCardCount';
import { useCoverNavigate } from '@/features/contentModal/hooks/useCoverNavigate';
import { withListLoadToScroll } from '@/components/List/withListLoadToScroll';

import { ListResultTitle } from '@/components/List/ListTitle';
import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import ContentList from '@/features/content/components/ContentList';
import ContentEmptyPage from '@/components/Elements/EmptyPage/ContentEmptyPage';

interface FindedContentListProps {
  filter: any;
}

const FindedContentList: FC<FindedContentListProps> = ({ filter }) => {
  const { keepNavigate } = useCoverNavigate();
  const { count } = useCardCount({ bi: true });

  const rowGap = 20;
  const colgap = 4;

  const FindedContentsLoadToScroll = useMemo(
    () =>
      withListLoadToScroll({
        ListComp: ContentList,
        filter: { ...filter, size: 8 },
        gap: rowGap,
        fallback: (
          <SkeletonContentCardList
            columnCount={count}
            count={8}
            rowGap={rowGap}
            gap={colgap}
            isCard
          />
        ),
      }),
    [filter, count],
  );

  return (
    <div className="min-h-[70vh]">
      <FindedContentsLoadToScroll
        colGap={colgap}
        columnCount={count}
        title={(cnt, page) =>
          page === 0 ? <ListResultTitle cnt={cnt} mb={5} /> : null
        }
        onSelect={id => keepNavigate(`/content/${id}`)}
        emptyFallback={<ContentEmptyPage />}
      />
    </div>
  );
};

export default FindedContentList;
