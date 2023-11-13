import { FC, Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';

import ContentModalProvider from '../provider/ContentsModalProvider';
import { useBreakPoint } from '@/utils/breakpoint';

import RelationArea from '../../content/components/RelationArea';
import ContentIntroDetail from './ContentDetail';
import VideoFrame from './Elements/VideoFrame';
import MolakPlayer from '@/features/contentModal/components/Player/MolakPlayer';
import { PlayerFallback } from '@/features/contentModal/components/Player/Player';
import PlayerCloseButton from './Player/PlayerClosebutton';

const ContentModal: FC = () => {
  const { episodeId } = useParams();

  const isIntroPage = !episodeId;

  const isXXL = useBreakPoint(p => p.eqBigger('2xl'));
  const videoWidth = useBreakPoint(p => (p.eqBigger('xl') ? 1120 : '100vw'));
  const videoHeight = 630;

  return (
    <ContentModalProvider>
      <VideoFrame width={videoWidth} height={videoHeight}>
        {isIntroPage && <PlayerCloseButton />}

        {isIntroPage ? (
          <ContentIntroDetail />
        ) : (
          <Suspense fallback={<PlayerFallback width="100%" height="100%" />}>
            <MolakPlayer />
          </Suspense>
        )}
      </VideoFrame>

      <RelationArea
        maxWidth={videoWidth}
        height={isXXL ? videoHeight : 'auto '}
      />
    </ContentModalProvider>
  );
};

export default ContentModal;
