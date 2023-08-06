import { FC, useState, Suspense } from 'react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

import { withListScrollLoad } from '@/components/List/withListScrollLoad';
import PageLayout from '@/components/Elements/Layout/PageLayout';

import ContentList from '@/features/content/components/ContentList';
import { PageIntroTitle } from '@/components/Elements/Title';
import GenreFilter from './GenreFilter';
import TagFilter from './TagFilter';
import { Divider } from '@/components/Elements/Divider';
import TypeFilter from './TypeFilter';
import { Spinner } from '@/components/Elements/Spinner';

import { scrollStyle } from '@/utils/style/content';

interface FindPageProps {
  _?: never;
}

const TITLE = {
  text: '장르 검색',
  description:
    '모락에서 자체 분류한 장르로 간편하게 원하는 웹드라마를 찾아보세요.',
};

const CONTENT_HEIGHT = 683;

// find 페이지 footer 없앰 - 태그, 리스트 각각 스크롤
const FindPage: FC<FindPageProps> = () => {
  // defaultFilter - 컨텐츠 페이지 갔다가 올 때?

  const [filter, setFilter] = useState({});
  const List = withListScrollLoad({
    ListComp: ContentList,
    filter,
    height: CONTENT_HEIGHT,
  }); // -> 리스트 pager, header, filter, sort 처리

  const updateFilter = (key: string, value: string) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };

  return (
    <PageLayout>
      <PageIntroTitle {...TITLE} marginBottom={3} />

      <div className="mb-5">
        <GenreFilter onSubmit={updateFilter.bind(null, 'genre')} />
      </div>

      <div className="flex gap-10">
        <div
          className={cx(scrollStyle, 'flex flex-col gap-3 w-52')}
          style={{ height: CONTENT_HEIGHT }}
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

        {/* 스피너 대신 스켈레톤 카드 리스트로 폴백 */}
        <Suspense fallback={<Spinner pad={44} />}>
          <List />
        </Suspense>
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
