import { FC } from 'react';

import { Intro } from '@/features/common/types/dto';
import { Button } from '@chakra-ui/react';
import { Image } from '../Image';
import { cx } from '@emotion/css';
import { useSizeRate, useText } from '@/hooks/responsive/usePadding';

interface IntroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intro: Intro;
  align?: 'left' | 'right';
  verticalAlign?: 'top' | 'bottom';
}

// const alignMap = {
//   left: 'left-10',
//   right: 'right-10',
// };

// const verticalAlignMap = {
//   top: 'top-5',
//   bottom: 'bottom-10',
// };

const IntroCard: FC<IntroCardProps> = ({
  intro,
  align = 'left',
  verticalAlign = 'bottom',
  ...props
}) => {
  const { md, xxl } = useText();
  const buttonWidth = useSizeRate(152);
  const textPadSize = useSizeRate(40);

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
        style={{ padding: textPadSize.md.size }}
        className={cx('absolute flex flex-col gap-3 inset-0 justify-end ')}
      >
        <div className={cx(md.className, 'text-gray-50')}>
          {intro.description}
        </div>
        <div
          className={cx(
            xxl.className,
            'font-bold text-white whitespace-pre-line',
          )}
        >
          {intro.text}
        </div>
        {intro.button_text && (
          <Button
            className="self-start font-bold  transition-all  duration-300  bg-white py-6  hover:bg-gray-100 active:bg-gray-200 hover:shadow-md"
            size="md"
            width={buttonWidth.md.size}
          >
            {intro.button_text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default IntroCard;
