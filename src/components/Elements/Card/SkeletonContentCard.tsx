import { FC } from 'react';

import { Skeleton } from '@chakra-ui/react';

interface ContentCardProps {
  isSeperateType?: boolean;
  height?: string | number;
}

const SkeletonContentCard: FC<ContentCardProps> = ({
  isSeperateType,
  height,
}) => {
  return (
    <a
      className="flex-1 inline-flex flex-col cursor-pointer "
      style={{ height }}
    >
      <div className="overflow-hidden rounded-md flex-1">
        <Skeleton width="100%" height="100%" />
      </div>
      {isSeperateType && (
        <>
          <div className="mt-3">
            <Skeleton
              height="1.4rem"
              width="100%"
              rounded="md"
              className="mb-1"
            />
          </div>
          <div className="mt-1">
            <Skeleton height="1.3rem" width="65%" rounded="md" />
          </div>
        </>
      )}
    </a>
  );
};

export default SkeletonContentCard;
