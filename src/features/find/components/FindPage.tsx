import { FC, useState, Suspense, useMemo } from 'react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

import { withScrollLoad } from '@/components/List/withScrollLoad';
import PageLayout from '@/components/Elements/Layout/PageLayout';

import AccumulateContentList from '@/features/content/components/AccumulateContentList';
import { PageIntroTitle } from '@/components/Elements/Title';
import GenreFilter from './GenreFilter';
import TagFilter from './TagFilter';
import { Divider } from '@/components/Elements/Divider';
import TypeFilter from './TypeFilter';
import { Spinner } from '@/components/Elements/Spinner';
import { Selector } from '@/components/Elements/Selector';

import { scrollStyle } from '@/utils/style/content';
import { genre_order } from '../constant/order';
import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';

interface FindPageProps {
  _?: never;
}

const TITLE = {
  text: '장르 검색',
  description:
    '모락에서 자체 분류한 장르로 간편하게 원하는 웹드라마를 찾아보세요.',
};

// const CONTENT_HEIGHT = 683;

// find 페이지 footer 없앰 - 태그, 리스트 각각 스크롤
const FindPage: FC<FindPageProps> = () => {
  // defaultFilter - 컨텐츠 페이지 갔다가 올 때?

  const [filter, setFilter] = useState({});

  const updateFilter = (key: string, value: string) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };

  const List = withScrollLoad({
    ListComp: AccumulateContentList,
    filter,
    className: 'h-full flex-1 pb-10',
  });

  return (
    <PageLayout className="box-border flex flex-col overflow-hidden h-ch ">
      <PageIntroTitle {...TITLE} marginBottom={3} />

      <div className="flex flex-col flex-1 gap-5 overflow-hidden">
        <div className="flex items-end justify-between">
          <GenreFilter onSubmit={updateFilter.bind(null, 'genre')} />

          <Selector
            options={genre_order}
            deafultValue={genre_order[0].id}
            onChange={opt => updateFilter('order', opt.id)}
          />
        </div>

        <div className="flex flex-1 gap-10 overflow-hidden">
          <div
            className={cx(scrollStyle, 'flex flex-col gap-3 w-52 h-full pb-10')}
          >
            <Divider />
            <div>
              <FilterTitle>태그</FilterTitle>
              <TagFilter onSubmit={updateFilter.bind(null, 'tags')} />
            </div>
            <Divider />
            <div>
              <FilterTitle>타입</FilterTitle>
              <TypeFilter onSubmit={updateFilter.bind(null, 'type')} />
            </div>
          </div>

          <List columnCount={4} />
        </div>
      </div>
    </PageLayout>
  );
};

export default FindPage;

const FilterTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
