import { FC } from 'react';
import { css, cx } from '@emotion/css';

import { Content } from '@/features/content/types/dto';
import { lineBreak } from '@/utils/style/content';
import { Image } from '../Image';
import { Skeleton } from '@chakra-ui/react';

interface ContentCardProps {
  content: Content;
  onClick?(): void;
  isCard?: boolean;
}

const ContentCard: FC<ContentCardProps> = ({ content, onClick, isCard }) => {
  return (
    <a
      className={cx(
        hovering,
        'flex-1 inline-block w-full cursor-pointer transition-all relative',
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-md" role="img">
        <Image
          useSuspense
          src={content.thumbnail}
          width="100%"
          height="auto"
          className="object-cover"
          style={{ maxHeight: '210px' }}
          fallback={<Skeleton width="100%" height="210px" />}
        />
      </div>

      {!isCard && (
        <div
          className="mt-auto absolute inset-0 h-[45%] description px-3 pb-3 flex flex-col justify-end rounded-md"
          style={{
            transition: 'opacity 0.4s',
            background: 'linear-gradient(0deg,  rgba(0,0,0,0.9), rgba(0,0,0,0)',
          }}
        >
          <div className={cx('text-white', lineBreak(2))}>{content.title}</div>
          <div className="text-sm text-gray-200">{content.provider}</div>
        </div>
      )}

      {isCard && (
        <>
          <div className="mt-2">
            <div className={cx('text-lg', lineBreak(2))}>{content.title}</div>
          </div>
          <div className="text-sm text-gray-500">{content.provider}</div>
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
