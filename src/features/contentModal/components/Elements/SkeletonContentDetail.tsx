import React, { FC } from 'react';

import { Skeleton } from '@chakra-ui/react';
import { range } from '@/utils/range';

interface SkeletonContentDetailProps {
  _?: any;
}

const SkeletonContentDetail: FC<SkeletonContentDetailProps> = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton height="2.4rem" width="5.2rem" />
      <Skeleton height="1.3rem" width="12rem" />
      <Skeleton height="3rem" width="28rem" className="mb-2" />

      {/* Tags */}
      <div className="flex gap-2">
        {range(2).map(n => (
          <Skeleton key={n} height="1.8rem" width="4.5rem" />
        ))}
      </div>
    </div>
  );
};

export default SkeletonContentDetail;
