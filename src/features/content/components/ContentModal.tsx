import { FC, Suspense } from 'react';
import { cx } from '@emotion/css';

import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useBreakPoint } from '@/utils/breakpoint';
import { useNavigate, useParams } from 'react-router-dom';

import Relations from './Relations';
import { Modal } from '@/components/Modal';
import { scrollStyle } from '@/utils/style/content';
import ContentVideoDetail from './ContentDetail';
import Player from './Player';

interface ContentModalProps {
  _?: never;
}

const width = 1120;
const height = 630;
const relateWidth = 460;

const ContentModal: FC<ContentModalProps> = () => {
  const { id, episodeId } = useParams();
  const navigate = useNavigate(); // has background location
  const bgLocation = useBackgroundLocation();

  if (!id) throw new Error('[dev] route error id is required');

  const handleClose = () => navigate(bgLocation ?? '/');
  const isMobile = useBreakPoint(p => p.smaller('lg'));

  return (
    <Modal close={handleClose} isOpen>
      <div
        className={cx(isMobile ? 'flex-col' : 'flex', `gap-2`)}
        style={{ height }}
      >
        <div
          className="rounded-md overflow-hidden bg-dark"
          style={{ width, height }}
        >
          <Suspense>
            {!episodeId && <ContentVideoDetail id={id} onClose={handleClose} />}
            {episodeId && (
              <Player width={width} height={height} id={episodeId} />
            )}
          </Suspense>
        </div>
        <div
          className={cx(`h-full rounded-md bg-white`, scrollStyle)}
          style={{ width: relateWidth }}
        >
          <Relations id={id} />
        </div>
      </div>
    </Modal>
  );
};

export default ContentModal;
