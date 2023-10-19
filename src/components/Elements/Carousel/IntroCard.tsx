import { FC } from 'react';

import { Intro } from '@/features/common/types/dto';
import { Button } from '@chakra-ui/react';
import { Image } from '../Image';
import { cx } from '@emotion/css';

interface IntroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intro: Intro;
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'center' | 'bottom';
}

const alignMap = {
  left: 'left-10',
  center: 'left-1/2',
  right: 'right-10',
};

const verticalAlignMap = {
  top: 'top-5',
  center: 'top-1/2',
  bottom: 'bottom-10',
};

const IntroCard: FC<IntroCardProps> = ({
  intro,
  align = 'left',
  verticalAlign = 'bottom',
  ...props
}) => {
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
      <div
        className={cx(
          verticalAlignMap[verticalAlign],
          alignMap[align],
          'absolute flex flex-col gap-3 ',
        )}
      >
        <div className="text-gray-50 text-sm">{intro.description}</div>
        <div className="text-2xl font-bold text-white whitespace-pre-line">
          {intro.text}
        </div>
        {intro.button_text && (
          <Button
            className="self-start font-bold  transition-all  duration-300  bg-white py-6  hover:bg-gray-100 active:bg-gray-200 hover:shadow-md"
            size="md"
            width={140}
          >
            {intro.button_text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default IntroCard;
