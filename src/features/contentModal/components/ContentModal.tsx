import { FC, Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';

import ContentModalProvider from '../provider/ContentsModalProvider';
import { useBreakPoint } from '@/utils/breakpoint';
import { useCoverNavigate } from '../hooks/useCoverNavigate';

import RelationArea from '../../content/components/RelationArea';
import ContentIntroDetail from './ContentDetail';
import VideoFrame from './Elements/VideoFrame';
import CloseButton from './Elements/CloseButtont';
import MolakPlayer from '@/features/contentModal/components/Player/MolakPlayer';
import { PlayerFallback } from '@/features/contentModal/components/Player/Player';

const ContentModal: FC = () => {
  const { episodeId } = useParams();
  const { coverClose } = useCoverNavigate();

  const isIntroPage = !episodeId;

  const isXXL = useBreakPoint(p => p.eqBigger('2xl'));
  const videoWidth = useBreakPoint(p => (p.eqBigger('xl') ? 1120 : '100vw'));
  const videoHeight = 630;

  return (
    <ContentModalProvider>
      <VideoFrame width={videoWidth} height={videoHeight}>
        {isIntroPage && (
          <div className="absolute top-3 right-3 z-30">
            <CloseButton onClick={coverClose} />
          </div>
        )}

        {isIntroPage ? (
          <ContentIntroDetail />
        ) : (
          <div style={{ width: videoWidth, height: videoHeight }}>
            <Suspense fallback={<PlayerFallback width="100%" height="100%" />}>
              <MolakPlayer />
            </Suspense>
          </div>
        )}
      </VideoFrame>

      <RelationArea height={isXXL ? videoHeight : 'fit-content'} />
    </ContentModalProvider>
  );
};

export default ContentModal;
