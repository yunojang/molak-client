import { FC } from 'react';

import { Skeleton } from '@chakra-ui/react';
import { useSizeRate } from '@/hooks/responsive/usePadding';

interface SkeletonEpisodeCardProps {
  _?: any;
}

const SkeletonEpisodeCard: FC<SkeletonEpisodeCardProps> = () => {
  const {
    md: { size: width },
  } = useSizeRate(200);
  const height = width * 0.5625;

  return (
    <div className="flex gap-3 cursor-pointer w-full">
      <Skeleton width={width} height={height} rounded="md" />
      <div className="flex flex-col flex-1 gap-1">
        <Skeleton height="1.3rem" width="50%" maxWidth={'200px'} rounded="md" />
        <Skeleton height="1.1rem" width="95%" rounded="md" />
        <Skeleton height="1.1rem" width="95%" rounded="md" />
      </div>
    </div>
  );
};

export default SkeletonEpisodeCard;
