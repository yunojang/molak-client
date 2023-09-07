import { Suspense } from 'react';

import IntroCarousel from '@/components/Elements/Carousel/IntroCarousel';
import FeedList from '@/features/feed/components/FeedList';
import SkeletonFeedList from '@/features/feed/components/SkeletonFeedList';

function Landing() {
  return (
    <>
      <IntroCarousel height="36em" />

      <div className="pt-16">
        <Suspense fallback={<SkeletonFeedList contentHeight={254} />}>
          <FeedList contentHeight={254} gap={26} />
        </Suspense>
      </div>
    </>
  );
}

export default Landing;
