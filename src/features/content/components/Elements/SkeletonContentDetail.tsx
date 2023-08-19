import React, { FC } from 'react';

import { Skeleton } from '@chakra-ui/react';
import { range } from '@/utils/range';

interface SkeletonContentDetailProps {
  _?: any;
}

const SkeletonContentDetail: FC<SkeletonContentDetailProps> = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton height="2rem" width="5rem" />
      <Skeleton height="1rem" width="10rem" />
      <Skeleton height="2.5rem" width="24rem" />

      {/* Tags */}
      <div className="flex gap-2">
        {range(2).map(n => (
          <Skeleton key={n} height="1.5rem" width="4rem" />
        ))}
      </div>
    </div>
  );
};

export default SkeletonContentDetail;
