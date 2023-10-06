import { FC, Suspense } from 'react';
import SkeletonFeedList from './SkeletonFeedList';
import FeedList from './FeedList';
import RecommendFeedList from './RecommendFeedList';

interface FeedsProps {
  _?: any;
}

const Feeds: FC<FeedsProps> = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mb-12">
        <Suspense>
          <RecommendFeedList />
        </Suspense>
      </div>

      <Suspense fallback={<SkeletonFeedList contentHeight={240} />}>
        <FeedList contentHeight={240} />
      </Suspense>
    </div>
  );
};

export default Feeds;
