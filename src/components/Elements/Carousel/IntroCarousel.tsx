import { FC } from 'react';
import { useNavigate } from '@/hooks/common/useNavigate';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useIntro } from '@/features/common/api/getIntroes';
import { Intro } from '@/features/common/types/dto';

import Carousel from './Carousel';
import IntroCard from './IntroCard';

interface IntroCarouselProps {
  onSelect?(): void;
}

const IntroCarousel: FC<IntroCarouselProps> = () => {
  const { intro } = useIntro();

  const navigate = useNavigate();
  const navigateWithBg = useNavigateWithBg();

  const handleSelectIntro = (selected: Intro) => {
    if (selected.link) navigate(selected.link);
    if (selected.external_link) window.open(selected.external_link);
    //  go to content page
    if (selected.item_id) navigateWithBg(`/content/${selected.item_id}`);
  };

  return (
    <div
      style={{
        height: '36vw',
        minHeight: '30vh',
      }}
    >
      <Carousel
        autoPlay
        hideMove // move button hide
        height="100%"
        items={intro?.map((v, i) => (
          <IntroCard key={i} intro={v} onClick={() => handleSelectIntro(v)} />
        ))}
      />
    </div>
  );
};

export default IntroCarousel;
