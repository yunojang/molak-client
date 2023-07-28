import { FC } from 'react';
import { cx } from '@emotion/css';

import { lineBreak } from '@/utils/style/content';
import { Skeleton } from '@chakra-ui/react';

interface ContentCardProps {
  _?: any;
}

const SkeletonContentCard: FC<ContentCardProps> = () => {
  return (
    <a className="inline-block cursor-pointer w-80">
      <div className="overflow-hidden rounded-md">
        <Skeleton height="180px" width="100%" />
      </div>
      <div className="mt-2">
        <Skeleton height="1.2rem" width="100%" rounded="md" className="mb-1" />
      </div>
      <div className="mt-1">
        <Skeleton height="1.2rem" width="80%" rounded="md" />
      </div>
    </a>
  );
};

export default SkeletonContentCard;
