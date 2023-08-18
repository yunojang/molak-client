import { FC } from 'react';
import { cx } from '@emotion/css';

import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useBreakPoint } from '@/utils/breakpoint';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/Modal';

interface ContentModalProps {
  _?: never;
}

const ContentModal: FC<ContentModalProps> = () => {
  const navigate = useNavigate(); // has background location
  const isMobile = useBreakPoint(p => p.smaller('lg'));
  const bgLocation = useBackgroundLocation();

  const handleDismiss = () => navigate(bgLocation ?? '/');

  return (
    <Modal close={() => handleDismiss()} isOpen>
      <div
        className={cx(
          isMobile ? 'w-screen h-screen' : '',
          'p-20 bg-white rounded-md',
        )}
      >
        컨텐츠
      </div>
    </Modal>
  );
};

export default ContentModal;
