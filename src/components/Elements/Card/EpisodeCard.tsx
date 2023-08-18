import React, { FC } from 'react';

import { Content } from '@/features/content/types/dto';

import { Image } from '../Image';
import { Skeleton } from '@chakra-ui/react';

interface EpisodeCardProps {
  content: Content;
}

const EpisodeCard: FC<EpisodeCardProps> = ({ content }) => {
  return (
    <div className="flex gap-3 cursor-pointer">
      <div className="overflow-hidden rounded-lg">
        <Image
          useSuspense
          src={content.thumbnail}
          width="100%"
          height="auto"
          className="object-cover"
          style={{ maxHeight: '88px', maxWidth: '140px' }}
          fallback={<Skeleton width="140px" height="88px" />}
        />
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <div className="font-bold">{content.title}</div>
        <div className="text-sm text-gray-500">{content.provider}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
