import { FC, useState, useMemo } from 'react';
// import { cx } from '@emotion/css';
import { withScrollLoad } from '@/components/List/withScrollLoad';

import PageLayout from '@/components/Elements/Layout/PageLayout';
import AccumulateContentList from '@/features/content/components/AccumulateContentList';
import { PageIntroTitle } from '@/components/Elements/Title';
// import GenreFilter from './GenreFilter';
// import TagFilter from './TagFilter';
// import TypeFilter from './TypeFilter';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useCardCount } from '@/features/content/hooks/useCardCount';
import { FIND_TITLE } from '../constant/title';
// import OrderSelector from './Elements/OrderSelector';
// import FitlerTitle from './Elements/FilterTitle';
// import { scrollYStyle } from '@/utils/style/scroll';
import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import Filters from '@/features/searchResult/components/filters/Filters';
import FindContentList from '../components/FindedContentList';
import OrderSelector from '../components/Elements/OrderSelector';

// find 페이지 footer 없앰 - 태그, 리스트 각각 스크롤
const FindPage: FC = () => {
  const [filter, setFilter] = useState({});

  const overwriteFilter = (filter: object) => {
    setFilter(prev => ({ ...prev, ...filter }));
  };

  return (
    <PageLayout className="box-border flex flex-col overflow-hidden h-ch ">
      <PageIntroTitle {...FIND_TITLE} marginBottom={3} />

      <div className="flex flex-col flex-1 gap-7 overflow-hidden">
        {/* <div className="flex items-end justify-between">
          <GenreFilter onChange={genre => overwriteFilter({ genre })} />

        </div> */}

        <div className="px-0.5 py-3 flex justify-between">
          <Filters onChange={filters => overwriteFilter(filters)} />
          <OrderSelector onChange={id => overwriteFilter({ order: id })} />
        </div>

        <div className="flex flex-1 gap-10 overflow-hidden">
          {/* <div className={cx(scrollYStyle, 'w-48 h-full pb-10')}>
            <FitlerTitle title="태그" />
            <TagFilter onChange={tags => overwriteFilter({ tags })} />

            <FitlerTitle title="타입" />
            <TypeFilter onChange={type => overwriteFilter({ type })} />
          </div> */}

          <FindContentList filter={filter} />
        </div>
      </div>
    </PageLayout>
  );
};

export default FindPage;
