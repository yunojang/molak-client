import { FC, Suspense } from 'react';

import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useNavigate, useParams } from 'react-router-dom';

import ContentModalLayout from './Elements/ContentModalLayout';
import Relations from '../../content/components/Relations';
import { Modal } from '@/components/Modal';
import ContentVideoDetail from './ContentDetail';
import Player from '../../content/components/Player';
import { useBreakPoint } from '@/utils/breakpoint';

const ContentModal: FC = () => {
  const { id, episodeId } = useParams();
  const isEpisode = !!episodeId;
  if (!id) throw new Error('[dev] route error, id is required');

  const navigate = useNavigate(); // has background location
  const bgLocation = useBackgroundLocation();

  const handleClose = () => navigate(bgLocation ?? '/');

  const videoWidth = useBreakPoint(p => (p.eqBigger('xl') ? 1120 : '100vw'));
  const videoHeight = 630;

  return (
    <Modal close={handleClose} isOpen overflowY="scroll">
      <ContentModalLayout>
        <div
          className="rounded-md overflow-hidden bg-dark"
          style={{ width: videoWidth, height: videoHeight }}
        >
          <Suspense>
            {!isEpisode && <ContentVideoDetail id={id} onClose={handleClose} />}

            {isEpisode && (
              <Player width={videoWidth} height={videoHeight} id={episodeId} />
            )}
          </Suspense>
        </div>

        <Relations id={id} videoHeight={videoHeight} />
      </ContentModalLayout>
    </Modal>
  );
};

export default ContentModal;
