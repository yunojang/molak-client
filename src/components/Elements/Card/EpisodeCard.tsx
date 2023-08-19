import React, { FC } from 'react';

import { Content } from '@/features/content/types/dto';

import { Image } from '../Image';
import { Skeleton } from '@chakra-ui/react';

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
          src={content.thumbnail}
          width="100%"
          height="auto"
          className="object-cover"
          style={{ maxHeight: '86px', width: '144px' }}
          fallback={<Skeleton width="144px" height="86px" />}
        />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="font-bold text-ellipsis overflow-hidden whitespace-nowrap ">
          {content.title}
        </div>
        <div className="text-sm text-gray-500">{content.description}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
