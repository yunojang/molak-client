import { FC, Suspense } from 'react';
import SkeletonFeedList from './SkeletonFeedList';
import FeedList from './FeedList';
import RecommendFeedList from './RecommendFeedList';
import { useContentHeight } from '@/features/content/hooks/useContentHeight';
import { useSpace } from '@/hooks/responsive/usePadding';
import { cx } from '@emotion/css';

interface FeedsProps {
  _?: any;
}

const Feeds: FC<FeedsProps> = () => {
  const height = useContentHeight();
  const gap = useSpace();

  return (
    <div className={cx(`flex flex-col gap-7`)}>
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
