import { FC, useMemo } from 'react';
import { cx } from '@emotion/css';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { withScrollLoad } from '@/components/List/withScrollLoad';

import AccumulateEpisodeList from './Episode/AccumulateEpisodeList';
import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';
import { Tabs } from '@/components/Elements/Tab';
import { Tab } from '@chakra-ui/react';

import { scrollStyle } from '@/utils/style/content';

interface RelationsProps {
  id: string;
  width?: string | number;
}

const Relations: FC<RelationsProps> = ({ id, width }) => {
  const bg = useBackgroundLocation();
  const keepNavigate = useNavigateWithBg(bg);

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
      className={cx(`px-3 pb-5 h-full rounded-md bg-white`, scrollStyle)}
      style={{ width }}
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
