import { FC } from 'react';

import { Skeleton } from '@chakra-ui/react';

interface SkeletonEpisodeCardProps {
  _?: any;
}

const SkeletonEpisodeCard: FC<SkeletonEpisodeCardProps> = () => {
  return (
    <div className="flex gap-3 cursor-pointer w-full">
      <Skeleton width="144px" height="88px" rounded="md" />
      <div className="flex flex-col flex-1 gap-1">
        <Skeleton height="1.2rem" width="65%" rounded="md" />
        <Skeleton height="1rem" width="95%" rounded="md" />
      </div>
    </div>
  );
};

export default SkeletonEpisodeCard;
