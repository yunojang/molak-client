import { FC } from 'react';
import { useRecommendFeeds } from '../api/getRecommendFeeds';
import FeedTitle from './FeedTitle';
import RecommendContentList from './RecommendContentList';

interface RecommendFeedListProps {
  gap?: number;
}

const RecommendFeedList: FC<RecommendFeedListProps> = ({ gap = 26 }) => {
  const { feed } = useRecommendFeeds();

  return (
    <div className="flex flex-col" style={{ gap: gap * 4 }}>
      {[feed]?.map((feed, i) => (
        <div className="pl-space" key={i}>
          <div className="mb-5 ">
            <FeedTitle title={feed.name} />
          </div>

          <RecommendContentList recommends={feed.item_list} />
        </div>
      ))}
    </div>
  );
};

export default RecommendFeedList;
