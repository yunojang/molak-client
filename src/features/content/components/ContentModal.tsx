import { FC, Suspense } from 'react';
import { cx } from '@emotion/css';

import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useBreakPoint } from '@/utils/breakpoint';
import { useNavigate, useParams } from 'react-router-dom';

import Relation from './Relation';
import { Modal } from '@/components/Modal';
import { scrollStyle } from '@/utils/style/content';
import ContentVideoDetail from './ContentVideoDetail';

interface ContentModalProps {
  _?: never;
}

const width = 1120;
const height = 630;
const relateWidth = 460;

const ContentModal: FC<ContentModalProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // has background location
  const bgLocation = useBackgroundLocation();

  if (!id) throw new Error('[dev] route error id is required');

  const handleClose = () => navigate(bgLocation ?? '/');
  const isMobile = useBreakPoint(p => p.smaller('lg'));

  return (
    <Modal close={handleClose} isOpen>
      <div className={`flex gap-2 h-[${height}px]`}>
        <div
          className="rounded-md overflow-hidden bg-dark"
          style={{ width, height }}
        >
          <ContentVideoDetail id={id} onClose={handleClose} />
        </div>
        <div
          className={cx(`h-full rounded-md bg-white`, scrollStyle)}
          style={{ width: relateWidth }}
        >
          <Relation id={id} />
        </div>
      </div>
    </Modal>
  );
};

export default ContentModal;
