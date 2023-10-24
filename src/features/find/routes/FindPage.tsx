import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { PageIntroTitle } from '@/components/Elements/Title';
import Filters from '@/features/searchResult/components/filters/Filters';
import FindedContentList from '../components/FindedContentList';
import OrderSelector from '../components/Elements/OrderSelector';

import { FIND_TITLE } from '../constant/title';
import FindContentLayout from '../components/Layout/FindContentLayout';
import { introCards } from '../constant/introcard';
import FindMainCard from '../components/FindMainCard/FindMainCard';
import IntroductionCard from '../components/FindMainCard/IntroductionCard';
import HotTags from '@/features/tags/components/HotTags';
import { HotTag } from '@/features/tags/types/dto';
import { scrollXStyle } from '@/utils/style/scroll';

// find 페이지 footer 없앰 - 태그, 리스트 각각 스크롤
const FindPage: FC = () => {
  const [filter, setFilter] = useState({});

  const overwriteFilter = (filter: object) => {
    setFilter(prev => ({ ...prev, ...filter }));
  };

  const handleSelectHotTag = (tag: HotTag) => {
    const filters = tag.items.reduce(
      (obj: any, cur) => ({
        ...obj,
        // 태그일때, 기존 obj에 (없으면 []로 초기화하고) 추가
        [cur.type]:
          cur.type === 'tags' ? [...(obj[cur.type] ?? []), cur.name] : cur.name,
      }),
      {},
    );

    setFilter(filters);
  };

  return (
    <div className="flex flex-col py-3">
      {/* <ToScroll to={0} /> */}

      <FindContentLayout>
        <PageIntroTitle {...FIND_TITLE} marginBottom={3} />
      </FindContentLayout>

      <div className="flex flex-col flex-1 gap-7 ">
        <FindContentLayout>
          <FindMainCard />
        </FindContentLayout>

        <FindContentLayout>
          <div className="flex gap-7">
            {introCards.map((card, idx) => (
              <IntroductionCard key={idx} {...card} />
            ))}
          </div>
        </FindContentLayout>

        <FindContentLayout>
          <div className="text-lg font-bold mb-3">핫한 키워드</div>
          <div className={cx(scrollXStyle, 'w-full py-1')}>
            <HotTags onSelect={handleSelectHotTag} />
          </div>
        </FindContentLayout>

        <div className="px-space py-3 top-header sticky left-0 z-10 bg-white">
          <div className="text-lg font-bold mb-3">필터로 찾기</div>
          <div className="flex justify-between">
            <Filters
              value={filter}
              onChange={filters => overwriteFilter(filters)}
            />
            <OrderSelector onChange={id => overwriteFilter({ order: id })} />
          </div>
        </div>

        <FindContentLayout>
          <FindedContentList filter={filter} />
        </FindContentLayout>
      </div>
    </div>
  );
};

export default FindPage;
