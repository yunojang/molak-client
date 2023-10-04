import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

import { Intro } from '@/features/common/types/dto';
import { Button } from '@chakra-ui/react';
import { Image } from '../Image';

interface IntroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intro: Intro;
}

const IntroCard: FC<IntroCardProps> = ({ intro, ...props }) => {
  return (
    <div {...props} className="w-full h-full overflow-hidden cursor-pointer ">
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

      {/* intro description */}
      <div className="absolute flex flex-col gap-3 left-10 bottom-12">
        <div className="text-3xl font-bold text-white whitespace-pre-line">
          {intro.text}
        </div>
        <Button
          className="self-start font-bold  transition-all  duration-300  bg-white py-6  hover:bg-gray-100 active:bg-gray-200 hover:shadow-md"
          size="md"
          width={140}
        >
          {intro.button_text}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
