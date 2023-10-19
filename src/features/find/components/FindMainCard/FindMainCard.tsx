import { FC } from 'react';
import Carousel from '@/components/Elements/Carousel/Carousel';
import IntroCard from '@/components/Elements/Carousel/IntroCard';

interface FindMainCardProps {
  _?: any;
}

const FindMainCard: FC<FindMainCardProps> = () => {
  return (
    <Carousel
      height="30vw"
      hideMove
      items={[
        <IntroCard
          key="1"
          intro={{
            image: '/asset/images/card.jpeg',
            text: '어서오세요 웰컴스토어에',
          }}
        />,
      ]}
    />
  );
};

export default FindMainCard;
