import { FC, useContext, useRef, useState } from 'react';
import { cx } from '@emotion/css';

import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useBreakPoint } from '@/utils/breakpoint';
import { ContentInfoContext } from '@/features/contentModal/store/ContentIdContext';

import RelaltionContentList from './RelationContentList';
import RelationTabs from '@/features/contentModal/components/Relation/RelationTabs';

import { scrollYStyle } from '@/utils/style/scroll';
import { moveScroll } from '@/utils/scroll/scroll';
import { relationTabs } from '../constant/tabs';

interface RelationsProps {
  width?: number | string;
  maxWidth?: number | string;
  height: number | string;
}

const RelationArea: FC<RelationsProps> = ({ width: inputwidth, height }) => {
  const { contentId: id, contentRef } = useContext(ContentInfoContext);
  const ref = useRef<HTMLDivElement>(null);

  const bg = useBackgroundLocation();
  const navigate = useNavigateWithBg(bg);

  const [tab, setTab] = useState(0);

  const width = useBreakPoint(p => (p.eqBigger('2xl') ? 480 : inputwidth));

  const handleSelectEpisode = (_: any, selectedId: string) => {
    if (relationTabs[tab].name == '시리즈')
      navigate(`/content/${id}/${selectedId}`);
    else if (relationTabs[tab].name == '추천작')
      navigate(`/content/${selectedId}`);

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
      className={cx(`pb-5 rounded-xl bg-white flex-1`, scrollYStyle)}
      style={{ width, height }}
    >
      <div className="sticky top-0 left-0 z-10 py-1.5 mb-3 w-full bg-white px-4">
        <RelationTabs defaultIndex={tab} onChange={handleChangeTab} />
      </div>

      <div className="px-4">
        <RelaltionContentList tab={tab} onSelect={handleSelectEpisode} />
      </div>
    </div>
  );
};

export default RelationArea;
