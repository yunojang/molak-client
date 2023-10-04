import { FC } from 'react';

import { Content } from '@/features/content/types/dto';
import { useRecommendContents } from '@/features/content/api/getRecommendContent';
import ContentCarousel from './elements/ContentCarousel';
import { useCardCount } from '@/features/content/hooks/useCardCount';

interface RecommendCardCarouselProps {
  onSelect?(id: string, content?: Content): void;
}

const RecommendCardCarousel: FC<RecommendCardCarouselProps> = ({
  onSelect,
}) => {
  const { contents } = useRecommendContents();
  const { count } = useCardCount();

  return (
    <ContentCarousel count={count} contents={contents} onSelect={onSelect} />
  );
};

export default RecommendCardCarousel;
