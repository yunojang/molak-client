import { FC } from 'react';

import { Content } from '@/features/content/types/dto';
import { useTopRankContent } from '@/features/content/api/getTopRankContent';
import ContentCarousel from './elements/ContentCarousel';
import { useCardCount } from '@/features/content/hooks/useCardCount';

interface TopRankingCardCarouselProps {
  onSelect?(id: string, content?: Content): void;
}

const TopRankingCardCarousel: FC<TopRankingCardCarouselProps> = ({
  onSelect,
}) => {
  const { contents } = useTopRankContent();
  const { count } = useCardCount({ bi: true });

  return (
    <ContentCarousel count={count} contents={contents} onSelect={onSelect} />
  );
};

export default TopRankingCardCarousel;
