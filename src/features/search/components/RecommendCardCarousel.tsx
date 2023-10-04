import { FC } from 'react';

import { Content } from '@/features/content/types/dto';
import { useRecommendContents } from '@/features/content/api/getRecommendContent';
import ContentCarousel from './elements/ContentCarousel';

interface RecommendCardCarouselProps {
  onSelect?(id: string, content?: Content): void;
}

const RecommendCardCarousel: FC<RecommendCardCarouselProps> = ({
  onSelect,
}) => {
  const { contents } = useRecommendContents();

  return <ContentCarousel count={4} contents={contents} onSelect={onSelect} />;
};

export default RecommendCardCarousel;
