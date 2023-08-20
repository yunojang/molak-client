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
import { Selector } from '@/components/Elements/Selector';

import { scrollStyle } from '@/utils/style/content';
import { genre_order } from '../constant/order';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

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
  const naviage = useNavigateWithBg();

  const [filter, setFilter] = useState({});
  const updateFilter = (key: string, value: string) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };

  // wrapper 방식의 허점 - warpper를 생성하는 컴포넌트가 다시 렌더링 될 때 아예 새로운 컴포넌트를 생성한다.
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

          <ContentList
            columnCount={4}
            onSelect={id => naviage(`/content/${id}`)}
          />
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
