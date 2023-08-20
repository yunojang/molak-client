import { FC, useMemo } from 'react';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';

import { withScrollLoad } from '@/components/List/withScrollLoad';
import AccumulateEpisodeList from './Episode/AccumulateEpisodeList';
import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';

interface RelationsProps {
  id: string;
}

const Relations: FC<RelationsProps> = ({ id }) => {
  const bg = useBackgroundLocation();
  const keepNavigate = useNavigateWithBg(bg);

  const List = useMemo(
    () =>
      withScrollLoad({
        ListComp: AccumulateEpisodeList,
        filter: { size: 10 },
        fallback: <SkeletonEpisodeList count={10} className="pt-3" />,
      }),
    [],
  );

  return (
    <div className="py-5 px-3">
      <div className="mb-5 text-xl font-bold">시리즈</div>

      {/* <Suspense fallback={<SkeletonEpisodeList />}> */}
      <List
        id={id}
        onSelect={selected => keepNavigate(`/content/${id}/${selected}`)}
      />
      {/* </Suspense> */}
    </div>
  );
};

export default Relations;
