import { FC } from 'react';
import { cx } from '@emotion/css';

import { Content } from '@/features/content/types/dto';
import { lineBreak } from '@/utils/style/content';

interface ContentCardProps {
  content: Content;
}

const ContentCard: FC<ContentCardProps> = ({ content }) => {
  return (
    <a className="inline-block cursor-pointer w-80">
      <div className="overflow-hidden rounded-md" role="img">
        <img src={content.thumbnail} />
      </div>
      <div className="mt-2">
        <div className={cx('text-lg', lineBreak(2))}>{content.title}</div>
      </div>
      <div className="mt-1">
        <div className="text-sm text-gray-500">{content.provider}</div>
      </div>
    </a>
  );
};

export default ContentCard;
