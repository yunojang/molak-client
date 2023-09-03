import { Suspense } from 'react';

import IntroCarousel from '@/components/Elements/Carousel/IntroCarousel';
import FeedList from '@/features/feed/components/FeedList';
import SkeletonFeedList from '@/features/feed/components/SkeletonFeedList';

function Landing() {
  return (
    <>
      <IntroCarousel height="42em" />

      <div className="pt-12">
        <Suspense fallback={<SkeletonFeedList contentHeight={260} />}>
          <FeedList contentHeight={260} gap={24} />
        </Suspense>
      </div>
    </>
  );
}

export default Landing;
