import { FC, Suspense } from 'react';

import { useParams } from 'react-router-dom';

import ContentModalLayout from './Elements/ContentModalLayout';
import Relations from '../../content/components/Relations';
import { Modal } from '@/components/Modal';
import ContentVideoDetail from './ContentDetail';
import Player from '../../content/components/Player';
import { useBreakPoint } from '@/utils/breakpoint';
import VideoFrame from './Elements/VideoFrame';
import { useCoverNavigate } from '../hooks/useCoverNavigate';
import ContentToolBar from './ContentToolBar';

const ContentModal: FC = () => {
  const { id, episodeId } = useParams();
  const { coverClose } = useCoverNavigate();

  const isContentIntro = !episodeId;
  const videoWidth = useBreakPoint(p => (p.eqBigger('xl') ? 1120 : '100vw'));
  const videoHeight = 630;

  if (!id) throw new Error('[dev] route error, id is required');
  return (
    <Modal
      isOpen
      close={coverClose}
      overflowY="scroll"
      fixedChildren={<ContentToolBar isEpisodePage={!!episodeId} />}
    >
      <ContentModalLayout>
        <VideoFrame width={videoWidth} height={videoHeight}>
          <Suspense>
            {isContentIntro ? (
              <ContentVideoDetail id={id} />
            ) : (
              <Player width={videoWidth} height={videoHeight} id={episodeId} />
            )}
          </Suspense>
        </VideoFrame>

        <Relations id={id} videoHeight={videoHeight} />
      </ContentModalLayout>
    </Modal>
  );
};

export default ContentModal;
