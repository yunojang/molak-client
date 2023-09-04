import { FC, useMemo } from 'react';
import { cx } from '@emotion/css';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { withScrollLoad } from '@/components/List/withScrollLoad';

import AccumulateEpisodeList from '../../contentModal/components/Episode/AccumulateEpisodeList';
import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';
import { Tabs } from '@/components/Elements/Tab';
import { Tab } from '@chakra-ui/react';

import { scrollStyle } from '@/utils/style/content';
import { useBreakPoint } from '@/utils/breakpoint';

interface RelationsProps {
  id: string;
  videoHeight: number;
}

const Relations: FC<RelationsProps> = ({ id, videoHeight }) => {
  const bg = useBackgroundLocation();
  const keepNavigate = useNavigateWithBg(bg);

  const width = useBreakPoint(p => (p.eqBigger('2xl') ? 480 : '100%'));
  const height = useBreakPoint(p => (p.eqBigger('2xl') ? videoHeight : ''));

  const EpisodeList = useMemo(
    () =>
      withScrollLoad({
        ListComp: AccumulateEpisodeList,
        filter: { size: 10 },
        fallback: <SkeletonEpisodeList count={10} className="pt-3" />,
      }),
    [],
  );

  return (
    <div
      className={cx(`px-3 pb-5 rounded-md bg-white flex-1`, scrollStyle)}
      style={{ width, height }}
    >
      <div className="sticky top-0 left-0 z-10 py-2 bg-white">
        <Tabs defaultIndex={0} width="100px">
          <Tab>시리즈</Tab>
          <Tab>추천</Tab>
          <Tab>댓글</Tab>
        </Tabs>
      </div>

      <EpisodeList
        id={id}
        onSelect={selected => keepNavigate(`/content/${id}/${selected}`)}
      />
    </div>
  );
};

export default Relations;
