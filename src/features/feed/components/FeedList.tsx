import { FC } from 'react';
import { useFeeds } from '../api/getFeeds';

import FeedTitle from './FeedTitle';
import ContentCard from '@/components/Elements/Card/ContentCard';

interface FeedListProps {
  _?: any;
}

const FeedList: FC<FeedListProps> = () => {
  const { feeds } = useFeeds();

  return (
    <>
      {feeds?.map((feed, i) => (
        <div className="mb-20" key={i}>
          <div className="pl-5 my-3">
            <FeedTitle title={feed.name} />
          </div>

          <div className="flex items-start gap-1 pl-5">
            {/* card carousel */}
            {feed.items_list.map((content, i) => (
              <ContentCard key={i} content={content} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedList;
