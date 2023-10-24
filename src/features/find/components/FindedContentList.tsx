import { FC, useMemo } from 'react';

import { useCardCount } from '@/features/content/hooks/useCardCount';
import { useCoverNavigate } from '@/features/contentModal/hooks/useCoverNavigate';
import { withListLoadToScroll } from '@/components/List/withListLoadToScroll';

import { ListResultTitle } from '@/components/List/ListTitle';
import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import ContentList from '@/features/content/components/ContentList';

interface FindedContentListProps {
  filter: any;
}

const FindedContentList: FC<FindedContentListProps> = ({ filter }) => {
  const { keepNavigate } = useCoverNavigate();
  const count = Math.floor(useCardCount().count / 2) * 2;

  // const ContentList = useMemo(
  //   () =>
  //     withScrollLoad({
  //       ListComp: AccumulateContentList,
  //       filter,
  //       className: 'h-full flex-1 pb-10',
  //       hasTitle: true,
  //       fallback: (
  //         <div className="mt-20">
  //           <SkeletonContentCardList
  //             columnCount={count}
  //             count={4}
  //             gap={5}
  //             rowGap={20}
  //             isCard
  //           />
  //         </div>
  //       ),
  //     }),
  //   [filter, count],
  // );

  const FindedContentsLoadToScroll = useMemo(
    () =>
      withListLoadToScroll({
        ListComp: ContentList,
        filter,
        gap: 20,
        fallback: (
          <SkeletonContentCardList
            columnCount={count}
            count={8}
            gap={4}
            rowGap={20}
            isCard
          />
        ),
      }),
    [filter, count],
  );

  return (
    <FindedContentsLoadToScroll
      colGap={4}
      columnCount={count}
      title={(cnt, page) =>
        page == 1 ? <ListResultTitle cnt={cnt} mb={5} /> : null
      }
      onSelect={id => keepNavigate(`/content/${id}`)}
    />
  );
};

export default FindedContentList;
