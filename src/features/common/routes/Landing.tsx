import IntroCarousel from '@/components/Elements/Carousel/IntroCarousel';
import { Spinner } from '@/components/Elements/Spinner';
import FeedList from '@/features/feed/components/FeedList';

function Landing() {
  return (
    <div>
      <IntroCarousel />

      <div className="pt-10">
        <FeedList />
      </div>
    </div>
  );
}

export default Landing;
