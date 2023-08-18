import { FC, Suspense } from 'react';

import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useBreakPoint } from '@/utils/breakpoint';
import { useNavigate, useParams } from 'react-router-dom';

import { Modal } from '@/components/Modal';
import ContentDetail from './ContentDetail';
import { Spinner } from '@/components/Elements/Spinner';

interface ContentModalProps {
  _?: never;
}

const ContentModal: FC<ContentModalProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // has background location
  const bgLocation = useBackgroundLocation();

  if (!id) throw new Error('[dev] route error id is required');

  const handleDismiss = () => navigate(bgLocation ?? '/');

  const isMobile = useBreakPoint(p => p.smaller('lg'));
  return (
    <Modal close={() => handleDismiss()} isOpen>
      <ContentDetail id={id} />
    </Modal>
  );
};

export default ContentModal;
