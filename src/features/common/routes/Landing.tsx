import { Suspense } from 'react';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

import IntroCarousel from '@/components/Elements/Carousel/IntroCarousel';
import FeedList from '@/features/feed/components/FeedList';
import SkeletonFeedList from '@/features/feed/components/SkeletonFeedList';

function Landing() {
  const navigate = useNavigateWithBg();

  return (
    <div>
      <IntroCarousel />

      <div className="pt-10">
        {/* <SkeletonFeedList /> */}
        <Suspense fallback={<SkeletonFeedList />}>
          <FeedList onSelect={id => navigate(`/content/${id}`)} />
        </Suspense>
      </div>
    </div>
  );
}

export default Landing;
