import React, { FC } from 'react';

import { Content } from '@/features/content/types/dto';

import { Image } from '../Image';
import { Skeleton } from '@chakra-ui/react';
import { cx } from '@emotion/css';
import { lineBreak } from '@/utils/style/content';

interface EpisodeCardProps {
  content: Content;
  onClick?(): void;
}

const EpisodeCard: FC<EpisodeCardProps> = ({ content, onClick }) => {
  return (
    <div
      className="flex gap-3 cursor-pointer w-full overflow-hidden"
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          useSuspense
          src={content.thumbnailUrl}
          className="object-cover"
          style={{ height: '110px', width: '180px' }}
          fallback={<Skeleton width="180px" height="110px" />}
        />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="font-bold text-ellipsis text-lg overflow-hidden whitespace-nowrap ">
          {content.title}
        </div>
        <div className={cx('text-gray-500', lineBreak(2))}>
          {content.description}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
