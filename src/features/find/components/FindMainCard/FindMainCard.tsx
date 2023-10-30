import { FC } from 'react';
import Carousel from '@/components/Elements/Carousel/Carousel';
import IntroCard from '@/components/Elements/Carousel/IntroCard';
import { useCoverNavigate } from '@/features/contentModal/hooks/useCoverNavigate';

interface FindMainCardProps {
  _?: any;
}

const intro = {
  image: '/asset/images/card.jpeg',
  text: '어서오세요 웰컴스토어에',
  link: '/content/1',
};

const FindMainCard: FC<FindMainCardProps> = () => {
  const { keepNavigate } = useCoverNavigate();

  return (
    <div style={{ height: '30vw', minHeight: '25vh' }}>
      <Carousel
        height="100%"
        hideMove
        items={[
          <IntroCard
            key="1"
            onClick={() => keepNavigate(intro.link)}
            intro={intro}
          />,
        ]}
      />
    </div>
  );
};

export default FindMainCard;
