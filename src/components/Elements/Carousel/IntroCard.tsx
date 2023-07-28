import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Intro } from '@/features/common/types/dto';
import { Button } from '@chakra-ui/react';

interface IntroCardProps {
  intro: Intro;
}

const IntroCard: FC<IntroCardProps> = ({ intro }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (intro.link) navigate(intro.link);
    if (intro.item_id) navigate(`/content/${intro.item_id}`);
    if (intro.external_link) window.open(intro.external_link);
  };
  return (
    <div
      className="w-full h-full overflow-hidden cursor-pointer "
      onClick={handleClick}
    >
      {/* image wrap */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <img
          src={intro.image}
          style={{ height: '100%', width: '100%' }}
          className="object-cover"
        />
      </div>

      {/* controler */}
      <div className="absolute left-24 bottom-24">
        <div className="text-4xl font-bold text-white whitespace-pre-line">
          {intro.text}
        </div>
        <Button className="mt-7" size="lg">
          {intro.button_text}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
