import { Suspense } from 'react';

import IntroCarousel from '@/components/Elements/Carousel/IntroCarousel';
import FeedList from '@/features/feed/components/FeedList';
import SkeletonFeedList from '@/features/feed/components/SkeletonFeedList';

import { Modal } from '@/components/Modal';

function Landing() {
  return (
    <div>
      <IntroCarousel />

      <Modal />

      <div className="pt-10">
        {/* <SkeletonFeedList /> */}
        <Suspense fallback={<SkeletonFeedList />}>
          <FeedList />
        </Suspense>
      </div>
    </div>
  );
}

export default Landing;
