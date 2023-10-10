import { FC, useState, useMemo } from 'react';
import { cx } from '@emotion/css';
import { withScrollLoad } from '@/components/List/withScrollLoad';

import PageLayout from '@/components/Elements/Layout/PageLayout';
import AccumulateContentList from '@/features/content/components/AccumulateContentList';
import { PageIntroTitle } from '@/components/Elements/Title';
import GenreFilter from './GenreFilter';
import TagFilter from './TagFilter';
import TypeFilter from './TypeFilter';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useCardCount } from '@/features/content/hooks/useCardCount';
import { FIND_TITLE } from '../constant/title';
import OrderSelector from './Elements/OrderSelector';
import FitlerTitle from './Elements/FilterTitle';
import { scrollYStyle } from '@/utils/style/scroll';
import SkeletonContentCard from '@/components/Elements/Card/SkeletonContentCard';

// find 페이지 footer 없앰 - 태그, 리스트 각각 스크롤
const FindPage: FC = () => {
  const naviage = useNavigateWithBg();
  const count = Math.floor(useCardCount().count / 2) * 2;

  const [filter, setFilter] = useState({});

  const overwriteFilter = (filter: object) => {
    setFilter(prev => ({ ...prev, ...filter }));
  };

  // warpper를 생성하는 컴포넌트가 다시 렌더링 될 때 아예 새로운 컴포넌트를 생성한다. -> useMemo
  const ContentList = useMemo(
    () =>
      withScrollLoad({
        ListComp: AccumulateContentList,
        filter,
        className: 'h-full flex-1 pb-10',
        hasTitle: true,
      }),
    [filter],
  );

  return (
    <PageLayout className="box-border flex flex-col overflow-hidden h-ch ">
      <PageIntroTitle {...FIND_TITLE} />

      <div className="flex flex-col flex-1 gap-5 overflow-hidden">
        <div className="flex items-end justify-between">
          <GenreFilter onSubmit={genre => overwriteFilter({ genre })} />

          <OrderSelector onChange={id => overwriteFilter({ order: id })} />
        </div>

        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className={cx(scrollYStyle, 'w-48 h-full pb-10')}>
            <FitlerTitle title="태그" />
            <TagFilter onSubmit={tags => overwriteFilter({ tags })} />

            <FitlerTitle title="타입" />
            <TypeFilter onSubmit={type => overwriteFilter({ type })} />
          </div>

          <ContentList
            columnCount={count}
            onSelect={id => naviage(`/content/${id}`)}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default FindPage;
