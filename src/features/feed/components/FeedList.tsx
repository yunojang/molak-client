import { FC } from 'react';
import { useFeeds } from '../api/getFeeds';

import FeedTitle from './FeedTitle';
import ContentCard from '@/components/Elements/Card/ContentCard';
import CardCarousel from '@/components/Elements/Carousel/CardCarousel';

interface FeedListProps {
  _?: any;
}

const FeedList: FC<FeedListProps> = () => {
  const { feeds } = useFeeds();

  return (
    <>
      {feeds?.map((feed, i) => (
        <div className="mb-14" key={i}>
          <div className="pl-8 my-3">
            <FeedTitle title={feed.name} />
          </div>

          <CardCarousel
            items={feed.items_list.map((content, i) => (
              <ContentCard key={i} content={content} />
            ))}
          />
        </div>
      ))}
    </>
  );
};

export default FeedList;
