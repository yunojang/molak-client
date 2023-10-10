import { FC, Suspense } from 'react';
import SkeletonFeedList from './SkeletonFeedList';
import FeedList from './FeedList';
import RecommendFeedList from './RecommendFeedList';
import { useContentHeight } from '@/features/content/hooks/useContentHeight';

interface FeedsProps {
  _?: any;
}

const Feeds: FC<FeedsProps> = () => {
  const height = useContentHeight();

  return (
    <div className="flex flex-col gap-5">
      <div className="mb-12">
        <Suspense>
          <RecommendFeedList />
        </Suspense>
      </div>

      <Suspense fallback={<SkeletonFeedList contentHeight={height} />}>
        <FeedList />
      </Suspense>
    </div>
  );
};

export default Feeds;
