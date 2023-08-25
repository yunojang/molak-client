import { FC, useMemo } from 'react';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';

import { withScrollLoad } from '@/components/List/withScrollLoad';
import AccumulateEpisodeList from './Episode/AccumulateEpisodeList';
import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';
import { Tabs } from '@/components/Elements/Tab';
import { Tab } from '@chakra-ui/react';

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
    <div className="px-3 pb-5">
      <div className="sticky top-0 left-0 z-10 py-3 bg-white">
        <Tabs defaultIndex={0}>
          <Tab>시리즈</Tab>
          <Tab>추천</Tab>
          <Tab>댓글</Tab>
        </Tabs>
      </div>

      {/* <div className="mb-5 text-xl font-bold">시리즈</div> */}

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
