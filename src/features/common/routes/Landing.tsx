import IntroCarousel from '@/components/Elements/Carousel/IntroCarousel';
import FeedList from '@/features/feed/components/FeedList';
import SliderCarousel from '@/components/Elements/Carousel/SliderCarousel';
import ContentCard from '@/components/Elements/Card/ContentCard';

import { range } from '@/utils/range';
import { content } from '../temp';

function Landing() {
  return (
    <div>
      <IntroCarousel />

      <SliderCarousel
        items={range(20, () => content).map((c, i) => (
          <ContentCard key={i} content={c} />
        ))}
      />

      <div className="pt-10">
        <FeedList />
      </div>
    </div>
  );
}

export default Landing;

const Test = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center w-[1500px] h-20 overflow-hidden">
    {text}
  </div>
);
