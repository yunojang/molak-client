import IntroCarousel from '@/components/Elements/Carousel/IntroCarousel';
import Feeds from '@/features/feed/components/Feeds';

function Landing() {
  return (
    <main>
      <IntroCarousel height="36vw" />

      <div className="pt-16">
        <Feeds />
      </div>
    </main>
  );
}

export default Landing;
