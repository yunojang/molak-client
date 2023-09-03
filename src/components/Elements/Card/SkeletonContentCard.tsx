import { FC } from 'react';

import { Skeleton } from '@chakra-ui/react';

interface ContentCardProps {
  isCard?: boolean;
  height?: string | number;
}

const SkeletonContentCard: FC<ContentCardProps> = ({ isCard, height }) => {
  return (
    <a
      className="flex-1 inline-flex flex-col cursor-pointer "
      style={{ height }}
    >
      <div className="overflow-hidden rounded-md flex-1">
        <Skeleton width="100%" height="100%" />
      </div>
      {isCard && (
        <>
          <div className="mt-2">
            <Skeleton
              height="1.2rem"
              width="100%"
              rounded="md"
              className="mb-1"
            />
          </div>
          <div className="mt-1">
            <Skeleton height="1.2rem" width="80%" rounded="md" />
          </div>
        </>
      )}
    </a>
  );
};

export default SkeletonContentCard;
