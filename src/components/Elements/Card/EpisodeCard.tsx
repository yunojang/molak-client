import React, { FC } from 'react';

import { Content } from '@/features/content/types/dto';

import { Image } from '../Image';
import { Skeleton } from '@chakra-ui/react';
import { cx } from '@emotion/css';
import { lineBreak } from '@/utils/style/content';
import { useSizeRate, useText } from '@/hooks/responsive/usePadding';

interface EpisodeCardProps {
  content: Content;
  onClick?(): void;
}

const EpisodeCard: FC<EpisodeCardProps> = ({ content, onClick }) => {
  const {
    md: { size: width },
  } = useSizeRate(200);
  const height = width * 0.5625;

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
          style={{ height, width }}
          fallback={<Skeleton width={width} height={height} />}
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
