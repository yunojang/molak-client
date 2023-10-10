import { FC } from 'react';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useNavigate } from 'react-router-dom';

import SearchPageLayout from '../components/layout/SearchPageLayout';
import ContentShowLayout from '../components/layout/ContentShowLayout';
import TopRankingCardCarousel from '../components/TopRankingCardCarousel';
import RecommendCardCarousel from '../components/RecommendCardCarousel';
import SearchInput from '../components/SearchInput';
import ToScroll from '@/utils/scroll/ToScroll';

const SearchPage: FC = () => {
  const navigate = useNavigate();
  const navigateBg = useNavigateWithBg();

  const handleCardSelect = (contentId: string) =>
    navigateBg(`/content/${contentId}`);

  const handleSearch = (query: string) => {
    if (!query) return;

    navigate(`/query?q=${query}`);
  };

  return (
    <SearchPageLayout>
      <ToScroll to={0} />

      {/* search input */}
      <SearchInput onSearch={handleSearch} />

      {/* search page recommend */}
      <div className="flex flex-col gap-10 w-full">
        <ContentShowLayout title="지금 인기있는 웹드라마">
          <TopRankingCardCarousel onSelect={id => handleCardSelect(id)} />
        </ContentShowLayout>

        <ContentShowLayout title="모락 추천 웹드라마">
          <RecommendCardCarousel onSelect={id => handleCardSelect(id)} />
        </ContentShowLayout>
      </div>
    </SearchPageLayout>
  );
};

export default SearchPage;
