import { FC } from 'react';

import { Skeleton } from '@chakra-ui/react';

interface ContentCardProps {
  isCard?: boolean;
}

const SkeletonContentCard: FC<ContentCardProps> = ({ isCard }) => {
  return (
    <a className="flex-1 inline-block cursor-pointer">
      <div className="overflow-hidden rounded-md">
        <Skeleton height="210px" width="100%" />
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
