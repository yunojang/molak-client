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
  height?: string | number;
}

const ContentCard: FC<ContentCardProps> = ({
  content,
  onClick,
  isSeperateType,
  height = '100%',
}) => {
  return (
    <a
      style={{ height }}
      className={cx(
        hovering,
        'inline-flex flex-col w-full cursor-pointer transition-all relative',
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-md flex-1" role="img">
        <Image
          useSuspense
          src={content.thumbnail}
          className="object-cover w-full h-full"
          fallback={<Skeleton width="100%" height="100%" />}
        />
      </div>

      {!isSeperateType && (
        <div
          className="mt-auto absolute inset-0 h-[85%] description px-3 pb-3 flex flex-col justify-end rounded-md"
          style={{
            transition: 'opacity 0.4s',
            background: 'linear-gradient(0deg,  rgba(0,0,0,0.9), rgba(0,0,0,0)',
          }}
        >
          <div className={cx('text-white text-xl font-bold', lineBreak(2))}>
            {content.title}
          </div>
          <div className="text-gray-200">{content.provider}</div>
        </div>
      )}

      {isSeperateType && (
        <>
          <div className="mt-2">
            <div className={cx('text-xl', lineBreak(2))}>{content.title}</div>
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
