import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

import { Intro } from '@/features/common/types/dto';
import { Button } from '@chakra-ui/react';
import { Image } from '../Image';

interface IntroCardProps {
  intro: Intro;
}

const IntroCard: FC<IntroCardProps> = ({ intro }) => {
  const navigate = useNavigate();
  const navigateWithBg = useNavigateWithBg();

  const handleClick = () => {
    if (intro.link) navigate(intro.link);
    //  go to content page
    if (intro.item_id) navigateWithBg(`/content/${intro.item_id}`);
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
        <Image
          src={intro.image}
          style={{ height: '100%', width: '100%' }}
          className="object-cover"
          fallback={
            <div
              style={{ height: '100%', width: '100%' }}
              className="bg-gray-400"
            />
          }
        />
      </div>

      {/* controler */}
      <div className="absolute flex flex-col gap-3 left-8 bottom-8">
        <div className="text-4xl font-bold text-white whitespace-pre-line">
          {intro.text}
        </div>
        <Button className="self-start text-black bg-gray-200" size="lg">
          {intro.button_text}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
