import { FC, Suspense } from 'react';

import { Content } from '@/features/content/types/dto';
import CardCarousel from '@/components/Elements/Carousel/CardCarousel';
import ContentCard from '@/components/Elements/Card/ContentCard';
import { Spinner } from '@/components/Elements/Spinner';

interface ContentCarouselProps {
  contents: Content[];
  onSelect?(id: string, content: Content): void;
}

const ContentCarousel: FC<ContentCarouselProps> = ({ contents, onSelect }) => {
  return (
    <div className="">
      <Suspense fallback={<Spinner />}>
        <CardCarousel
          count={4}
          items={contents.map((content, i) => (
            <ContentCard
              key={i}
              content={content}
              onClick={() => onSelect?.(content.id, content)}
            />
          ))}
        />
      </Suspense>
    </div>
  );
};

export default ContentCarousel;
