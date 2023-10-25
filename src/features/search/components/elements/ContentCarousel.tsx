import { FC } from 'react';

import { Content } from '@/features/content/types/dto';
import CardCarousel from '@/components/Elements/Carousel/CardCarousel';
import ContentCard from '@/components/Elements/Card/ContentCard';

interface ContentCarouselProps {
  count?: number;
  contents: Content[];
  onSelect?(id: string, content: Content): void;
}

const ContentCarousel: FC<ContentCarouselProps> = ({
  count = 4,
  contents,
  onSelect,
}) => {
  return (
    <div className="relative -ml-space">
      <CardCarousel
        gap={4}
        count={count}
        items={contents.map((content, i) => (
          <ContentCard
            key={i}
            content={content}
            onClick={() => onSelect?.(content.id, content)}
          />
        ))}
      />
    </div>
  );
};

export default ContentCarousel;
