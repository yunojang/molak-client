import IntroCarousel from '@/components/Elements/Carousel/IntroCarousel';
import Feeds from '@/features/feed/components/Feeds';

function Landing() {
  return (
    <main>
      <IntroCarousel />

      <div className="pt-16">
        <Feeds />
      </div>
    </main>
  );
}

export default Landing;
