import { FC, Suspense } from 'react';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';

import Episodes from './Episode/Episodes';
import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';

interface RelationsProps {
  id: string;
}

const Relation: FC<RelationsProps> = ({ id }) => {
  const bg = useBackgroundLocation();
  const keepNavigate = useNavigateWithBg(bg);

  return (
    <div className={'h-full py-5 px-3'}>
      <div className="mb-5 text-xl font-bold">시리즈</div>

      {/* <SkeletonEpisodeList /> */}
      <Suspense fallback={<SkeletonEpisodeList />}>
        <Episodes
          id={id}
          onSelect={selected => keepNavigate(`/content/${id}/${selected}`)}
        />
      </Suspense>
    </div>
  );
};

export default Relation;
