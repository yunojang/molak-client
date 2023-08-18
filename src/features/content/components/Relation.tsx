import { FC, Suspense } from 'react';

import Episodes from './Episodes';
import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';

interface RelationsProps {
  id: string;
}

const Relation: FC<RelationsProps> = ({ id }) => {
  return (
    <div className={'h-full py-5 px-3'}>
      <div className="mb-5 text-xl font-bold">시리즈</div>

      {/* <SkeletonEpisodeList /> */}
      <Suspense fallback={<SkeletonEpisodeList />}>
        <Episodes id={id} />
      </Suspense>
    </div>
  );
};

export default Relation;
