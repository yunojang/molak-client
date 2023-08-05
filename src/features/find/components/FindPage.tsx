import React, { FC } from 'react';
import { cx } from '@emotion/css';

import PageLayout from '@/components/Elements/Layout/PageLayout';
import { PageIntroTitle } from '@/components/Elements/Title';
import GenreFilter from './GenreFilter';
import { scrollStyle } from '@/utils/style/content';
import TagFilter from './TagFilter';
import { Divider } from '@/components/Elements/Divider';
import styled from '@emotion/styled';
import TypeFilter from './TypeFilter';

interface FindPageProps {
  _?: never;
}

const TITLE = {
  text: '장르 검색',
  description:
    '모락에서 자체 분류한 장르로 간편하게 원하는 웹드라마를 찾아보세요.',
};

const FindPage: FC<FindPageProps> = () => {
  return (
    <PageLayout>
      <PageIntroTitle {...TITLE} marginBottom={5} />

      <div className="mb-5">
        <GenreFilter />
      </div>

      <div className="flex gap-3">
        <div className={cx(scrollStyle, 'h-full flex flex-col gap-5 w-52')}>
          <Divider />
          <div>
            <FilterTitle>태그</FilterTitle>
            <TagFilter />
          </div>
          <Divider />
          <div>
            <FilterTitle>타입</FilterTitle>
            <TypeFilter />
          </div>
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
