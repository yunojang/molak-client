import { FC, Suspense } from 'react';
import { cx } from '@emotion/css';

import SkeletonFeedList from './SkeletonFeedList';
import FeedList from './FeedList';
import RecommendFeedList from './RecommendFeedList';
import { useContentHeight } from '@/features/content/hooks/useContentHeight';
import { useSizeRate } from '@/hooks/responsive/usePadding';

interface FeedsProps {
  _?: any;
}

const Feeds: FC<FeedsProps> = () => {
  const height = useContentHeight();
  const {
    md: { size: gap },
  } = useSizeRate(26);

  return (
    <div className={cx(`flex flex-col gap-7`)}>
      <div className="mb-12">
        <Suspense>
          <RecommendFeedList gap={gap} />
        </Suspense>
      </div>

      <Suspense
        fallback={<SkeletonFeedList contentHeight={height} gap={gap} />}
      >
        <FeedList gap={gap} />
      </Suspense>
    </div>
  );
};

export default Feeds;
