import { FC } from 'react';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

import SearchPageLayout from '../components/layout/SearchPageLayout';
import { Input } from '@chakra-ui/react';
import ContentShowLayout from '../components/layout/ContentShowLayout';
import TopRankingCardCarousel from '../components/TopRankingCardCarousel';
import RecommendCardCarousel from '../components/RecommendCardCarousel';

const SearchPage: FC = () => {
  const navigate = useNavigateWithBg();

  const handleCardSelect = (contentId: string) =>
    navigate(`/content/${contentId}`);

  return (
    <SearchPageLayout>
      {/* search input */}
      <Input
        variant={'outline'}
        height="50px"
        bgColor="#fff"
        placeholder="작품명, 장르, 태그로 검색하세요"
        className="mb-5 w-full"
      />

      {/* search page recommend */}
      <div className="flex flex-col gap-3 w-full">
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
