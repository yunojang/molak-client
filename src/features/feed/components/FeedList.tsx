import { FC } from 'react';
import { useFeeds } from '../api/getFeeds';

import FeedTitle from './FeedTitle';
import ContentCard from '@/components/Elements/Card/ContentCard';
import CardCarousel from '@/components/Elements/Carousel/CardCarousel';
import { useCardCount } from '@/features/content/hooks/useCardCount';

interface FeedListProps {
  onSelect?(id: string): void;
}

const FeedList: FC<FeedListProps> = ({ onSelect }) => {
  const { feeds } = useFeeds();
  const { count } = useCardCount();

  return (
    <>
      {feeds?.map((feed, i) => (
        <div className="mb-14" key={i}>
          <div className="my-3 pl-space">
            <FeedTitle title={feed.name} />
          </div>

          <CardCarousel
            count={count}
            items={feed.items_list.map((content, i) => (
              <ContentCard
                key={i}
                content={content}
                onClick={() => onSelect?.(content.id)}
              />
            ))}
          />
        </div>
      ))}
    </>
  );
};

export default FeedList;
