import { FC, Suspense } from 'react';
import { cx } from '@emotion/css';

import Relation from './Relation';
import Player, { PlayerFallback } from './Player';

import { scrollStyle } from '@/utils/style/content';

interface ContentDetailProps {
  id: string;
}

const width = 1120;
const height = 630;
const relateWidth = 460;

const ContentDetail: FC<ContentDetailProps> = ({ id }) => {
  return (
    <div className={`flex gap-2 h-[${height}px]`}>
      <div className="rounded-md overflow-hidden">
        <Suspense fallback={<PlayerFallback width={width} height={height} />}>
          <Player id={id} width={width} height={height} />
        </Suspense>
      </div>

      <div
        className={cx(`h-full rounded-md bg-white`, scrollStyle)}
        style={{ width: relateWidth }}
      >
        <Relation id={id} />
      </div>
    </div>
  );
};

export default ContentDetail;
