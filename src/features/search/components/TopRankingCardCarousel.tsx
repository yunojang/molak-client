import { FC } from 'react';

import { Content } from '@/features/content/types/dto';
import { useTopRankContent } from '@/features/content/api/getTopRankContent';
import ContentCarousel from './elements/ContentCarousel';

interface TopRankingCardCarouselProps {
  onSelect?(id: string, content?: Content): void;
}

const TopRankingCardCarousel: FC<TopRankingCardCarouselProps> = ({
  onSelect,
}) => {
  const { contents } = useTopRankContent();

  return <ContentCarousel count={4} contents={contents} onSelect={onSelect} />;
};

export default TopRankingCardCarousel;
