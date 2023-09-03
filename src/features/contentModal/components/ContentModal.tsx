import { FC, Suspense } from 'react';

import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useNavigate, useParams } from 'react-router-dom';

import ContentModalLayout from './Elements/ContentModalLayout';
import Relations from '../../content/components/Relations';
import { Modal } from '@/components/Modal';
import ContentVideoDetail from './ContentDetail';
import Player from '../../content/components/Player';

const ContentModal: FC = () => {
  const { id, episodeId } = useParams();
  const isEpisode = !!episodeId;
  if (!id) throw new Error('[dev] route error, id is required');

  const navigate = useNavigate(); // has background location
  const bgLocation = useBackgroundLocation();

  const handleClose = () => navigate(bgLocation ?? '/');

  const videoWidth = 1120;
  const height = 630;
  const relateWidth = 480;

  return (
    <Modal close={handleClose} isOpen>
      <ContentModalLayout height={height}>
        <div
          className="rounded-md overflow-hidden bg-dark"
          style={{ width: videoWidth, height }}
        >
          <Suspense>
            {!isEpisode && <ContentVideoDetail id={id} onClose={handleClose} />}

            {isEpisode && (
              <Player width={videoWidth} height={height} id={episodeId} />
            )}
          </Suspense>
        </div>

        <Relations id={id} width={relateWidth} />
      </ContentModalLayout>
    </Modal>
  );
};

export default ContentModal;
