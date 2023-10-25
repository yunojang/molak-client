import { FC } from 'react';
import { css, cx } from '@emotion/css';

import { Content } from '@/features/content/types/dto';
import { lineBreak } from '@/utils/style/content';
import { Image } from '../Image';
import { Skeleton } from '@chakra-ui/react';

interface ContentCardProps {
  content: Content;
  onClick?(): void;
  isSeperateType?: boolean;
  width?: string | number;
  height?: string | number;
}

const ContentCard: FC<ContentCardProps> = ({
  content,
  onClick,
  isSeperateType,
  width = '100%',
  height = '100%',
}) => {
  return (
    <a
      style={{ height, width }}
      className={cx(
        hovering,
        !isSeperateType
          ? 'hover:scale-[1.025] hover:border-secondary border-4'
          : '',
        'inline-flex flex-col w-full cursor-pointer transition-transform select-none border-transparent rounded-xl p-[1.5px]',
      )}
      onClick={onClick}
    >
      <div
        className={cx('overflow-hidden rounded-md flex-1 relative')}
        role="img"
      >
        <Image
          useSuspense
          src={content.thumbnailUrl}
          className="object-cover w-full h-full"
          fallback={<Skeleton width="100%" height="100%" />}
        />

        {!isSeperateType && (
          <div
            className="mt-auto absolute inset-0 h-full description px-4 pb-5 flex flex-col  justify-end rounded-md
          "
            style={{
              transition: 'opacity 0.2s',
              background:
                'linear-gradient(0deg,  rgba(0,0,0,1) 25%, rgba(0,0,0,0.3)',
            }}
          >
            <div className={cx('text-white text-lg font-bold', lineBreak(1))}>
              {content.title}
            </div>
            <div className="text-gray-200 text-sm">{content.provider}</div>
          </div>
        )}
      </div>

      {isSeperateType && (
        <>
          <div className="mt-2">
            <div className={cx('text-lg', lineBreak(2))}>{content.title}</div>
          </div>
          <div className=" text-gray-500">{content.provider}</div>
        </>
      )}
    </a>
  );
};

export default ContentCard;

const hovering = css`
  &:hover {
    .description {
      opacity: 1;
    }
  }
  .description {
    opacity: 0;
  }
`;
