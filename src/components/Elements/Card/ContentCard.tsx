import { FC } from 'react';
import { css, cx } from '@emotion/css';

import { Content } from '@/features/content/types/dto';
import { lineBreak } from '@/utils/style/content';

interface ContentCardProps {
  content: Content;
  onClick?(): void;
}

const ContentCard: FC<ContentCardProps> = ({ content, onClick }) => {
  return (
    <a
      className={cx(
        hovering,
        'flex-1 inline-block w-full cursor-pointer transition-all relative',
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-md" role="img">
        <img src={content.thumbnail} width="100%" height="auto" />
      </div>
      <div
        className="mt-auto absolute inset-0 h-[60%] transition-all  description p-2 flex flex-col justify-end rounded-md"
        style={{
          background: 'linear-gradient(0deg,  rgba(0,0,0,0.8), rgba(0,0,0,0)',
        }}
      >
        <div className={cx('text-white', lineBreak(2))}>{content.title}</div>
        <div className="text-sm text-gray-200">{content.provider}</div>
      </div>
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
