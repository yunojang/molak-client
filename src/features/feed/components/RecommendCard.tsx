import { FC, useState } from 'react';

import { RecommendContent } from '@/features/content/types/dto';

import { Image } from '@/components/Elements/Image';
import Hovering from '@/components/Elements/Event/Hovering';
import { css, cx, keyframes } from '@emotion/css';

interface RecommendCardProps extends React.HTMLAttributes<HTMLDivElement> {
  recommend: RecommendContent;
  defaultWidth: string;
}

const RecommendCard: FC<RecommendCardProps> = ({
  recommend,
  defaultWidth,
  ...rest
}) => {
  const { background } = recommend;
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Hovering
      delay={600}
      onHover={() => setIsFocus(true)}
      onLeave={() => setIsFocus(false)}
    >
      <div
        {...rest}
        className="px-7 pt-7 rounded-xl h-[480px] cursor-pointer select-none border shadow-md overflow-hidden
         hover:shadow-lg hover:scale-[1.02]
      "
        style={{
          background,
          minWidth: isFocus ? '700px' : defaultWidth,
          transition: 'all .3s cubic-bezier(0,0,.5,1)',
          borderColor: isFocus ? '#f7b21b' : '#f5f5f5',
        }}
      >
        <div className="flex flex-col justify-between gap-7 h-full overflow-hidden items-start">
          <header
            className={cx('flex flex-col gap-3 items-start ')}
            style={{
              transform: isFocus ? 'translateY(-100%)' : 'translateY(0%)',
              transition: 'all .3s cubic-bezier(0,0,.5,1)',
              color: recommend.textColor,
            }}
          >
            <span className="text-sm">{recommend.content.title}</span>
            <span className="font-bold text-xl">
              {recommend.recommend_text}
            </span>
          </header>

          <div
            className={cx('self-center ')}
            style={{
              transform: isFocus ? 'translateY(110%)' : 'translateY(0%)',
              transition: 'all .3s cubic-bezier(0,0,.5,1)',
            }}
          >
            <Image src={recommend.recommend_image} width={defaultWidth} />
          </div>

          {isFocus && (
            <video
              src={recommend.teaser_url}
              controls={false}
              autoPlay
              className={cx(
                videoShowAnimation,
                'absolute inset-0 object-cover w-full h-full',
              )}
            />
          )}
        </div>
      </div>
    </Hovering>
  );
};

export default RecommendCard;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const videoShowAnimation = css`
  animation: ${fadein} 1.3s ease;
  /* animation-delay: 300ms; */
`;
