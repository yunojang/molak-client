import { FC } from 'react';
import { useIntro } from '@/features/common/api/getIntroes';

import Carousel from './Carousel';
import IntroCard from './IntroCard';

interface IntroCarouselProps {
  _?: any;
}

// const temp_color = ['green', 'pink', 'purple', 'gray'];

const IntroCarousel: FC<IntroCarouselProps> = () => {
  // get landing data on hooks
  const { intro } = useIntro();

  return (
    <Carousel
      autoPlay
      sliders={intro?.map((v, i) => (
        <IntroCard key={i} intro={v} />
      ))}
    />
  );
};

export default IntroCarousel;
