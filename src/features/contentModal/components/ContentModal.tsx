import { FC, Suspense, useState } from 'react';

import { useParams } from 'react-router-dom';

import ContentModalLayout from './Elements/ContentModalLayout';
import RelationArea from '../../content/components/RelationArea';
import { Modal } from '@/components/Modal';
import ContentIntroDetail from './ContentDetail';
import { useBreakPoint } from '@/utils/breakpoint';
import VideoFrame from './Elements/VideoFrame';
import { useCoverNavigate } from '../hooks/useCoverNavigate';
import CloseButton from './CloseButtont';
import MolakPlayer from '@/features/content/components/MolakPlayer';
// import ContentToolBar from './ContentToolBar';

const ContentModal: FC = () => {
  const { id, episodeId } = useParams();
  const { coverClose } = useCoverNavigate();

  const videoWidth = useBreakPoint(p => (p.eqBigger('xl') ? 1120 : '100vw'));
  const videoHeight = 630;

  const isIntroPage = !episodeId;
  const [isPlay, setIsPlay] = useState<boolean>(true);
  const showCloseButton = isIntroPage || !isPlay;

  if (!id) throw new Error('[dev] route error, id is required');
  return (
    <Modal
      isOpen
      close={coverClose}
      overflowY="scroll"
      // fixedChildren={<ContentToolBar isEpisodePage={!!episodeId} />}
    >
      <ContentModalLayout>
        <VideoFrame width={videoWidth} height={videoHeight}>
          {showCloseButton && (
            <div className="absolute top-3 right-3 z-30">
              <CloseButton onClick={coverClose} />
            </div>
          )}

          <Suspense>
            {isIntroPage ? (
              <ContentIntroDetail id={id} />
            ) : (
              <MolakPlayer
                episodeId={episodeId}
                width={videoWidth}
                height={videoHeight}
                onPlay={() => setIsPlay(true)}
                onPause={() => setIsPlay(false)}
              />
            )}
          </Suspense>
        </VideoFrame>

        <RelationArea id={id} videoHeight={videoHeight} />
      </ContentModalLayout>
    </Modal>
  );
};

export default ContentModal;
