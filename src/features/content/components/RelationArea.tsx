import { FC, useContext, useMemo, useState } from 'react';
import { cx } from '@emotion/css';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useBreakPoint } from '@/utils/breakpoint';
import { ContentIdContext } from '@/features/contentModal/store/ContentIdContext';

import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';
import { withListLoadToScroll } from '@/components/List/withListLoadToScroll';
import ListCallToDomain from '@/components/List/ListCallToDomain';

import { Tabs } from '@/components/Elements/Tab';
import { Tab } from '@chakra-ui/react';
import { scrollYStyle } from '@/utils/style/scroll';
import { relationTabs } from '../constant/tabs';

interface RelationsProps {
  videoHeight: number;
}

const RelationArea: FC<RelationsProps> = ({ videoHeight }) => {
  const { contentId: id } = useContext(ContentIdContext);

  const bg = useBackgroundLocation();
  const navigate = useNavigateWithBg(bg);

  const EpisodeList = useMemo(
    () =>
      withListLoadToScroll({
        ListComp: ListCallToDomain,
        fallback: <SkeletonEpisodeList count={5} gap={4} />,
        filter: { size: 5 },
        gap: 4,
      }),
    [],
  );

  const handleSelectEpisode = (_: any, episodeId: string) => {
    console.log('episodeId', episodeId);

    navigate(`/content/${id}/${episodeId}`);
  };

  const [tab, setTab] = useState(0);
  const currentTab = relationTabs[tab];

  const width = useBreakPoint(p => (p.eqBigger('2xl') ? 480 : '100%'));
  const height = useBreakPoint(p => (p.eqBigger('2xl') ? videoHeight : ''));

  return (
    <div
      className={cx(`px-3 pb-5 rounded-md bg-white flex-1`, scrollYStyle)}
      style={{ width, height }}
    >
      <div className="sticky top-0 left-0 z-10 py-2.5 mb-2 w-full bg-white">
        <Tabs defaultIndex={tab} width="100px" onChange={setTab}>
          {relationTabs.map((tab, index) => (
            <Tab key={index}>{tab.name}</Tab>
          ))}
        </Tabs>
      </div>

      <EpisodeList
        ViewComp={currentTab.ListView}
        domain={currentTab.domain}
        onSelect={handleSelectEpisode}
      />
    </div>
  );
};

export default RelationArea;
