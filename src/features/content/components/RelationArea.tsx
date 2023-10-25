import { FC, useContext, useRef, useState } from 'react';
import { cx } from '@emotion/css';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useBreakPoint } from '@/utils/breakpoint';
import { ContentInfoContext } from '@/features/contentModal/store/ContentIdContext';

import { scrollYStyle } from '@/utils/style/scroll';
import RelaltionContentList from './RelationContentList';
import { moveScroll } from '@/utils/scroll/scroll';
import RelationTabs from '@/features/contentModal/components/Relation/RelationTabs';

interface RelationsProps {
  videoHeight: number;
}

const RelationArea: FC<RelationsProps> = ({ videoHeight }) => {
  const { contentId: id, contentRef } = useContext(ContentInfoContext);
  const ref = useRef<HTMLDivElement>(null);

  const bg = useBackgroundLocation();
  const navigate = useNavigateWithBg(bg);

  const [tab, setTab] = useState(0);

  const width = useBreakPoint(p => (p.eqBigger('2xl') ? 480 : '100%'));
  const height = useBreakPoint(p => (p.eqBigger('2xl') ? videoHeight : ''));

  const handleSelectEpisode = (_: any, episodeId: string) => {
    navigate(`/content/${id}/${episodeId}`);
    if (contentRef?.current) moveScroll({ top: 0, target: contentRef.current });
  };

  const handleChangeTab = (index: number) => {
    setTab(index);
    if (ref.current)
      moveScroll({ top: 0, target: ref.current, behavior: 'auto' });
  };

  return (
    <div
      ref={ref}
      className={cx(`pb-5 rounded-md bg-white flex-1`, scrollYStyle)}
      style={{ width, height }}
    >
      <div className="sticky top-0 left-0 z-10 py-2.5 mb-2 w-full bg-white shadow-sm px-4">
        <RelationTabs defaultIndex={tab} onChange={handleChangeTab} />
      </div>

      <div className="px-4">
        <RelaltionContentList tab={tab} onSelect={handleSelectEpisode} />
      </div>
    </div>
  );
};

export default RelationArea;
