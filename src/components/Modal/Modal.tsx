import React, { FC, useContext, useEffect } from 'react';
import { Portal } from '../Portal';
import { ModalContext } from '@/lib/modal/ModalContext';
import { useBodyScrollLock } from '@/hooks/useBodySrollLock';

interface ModalProps {
  isOpen?: boolean;
  open?(): void;
  close?(): void;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children, close, isOpen, open }) => {
  const targetId = useContext(ModalContext);
  const { lockScroll, releaseScroll } = useBodyScrollLock();

  useEffect(() => {
    if (isOpen) lockScroll();
    return () => releaseScroll();
  }, [isOpen, lockScroll, releaseScroll]);

  return (
    <Portal targetId={targetId}>
      {isOpen && (
        <div
          className="w-screen h-screen bg-black bg-opacity-[0.35]"
          onClick={close}
        >
          {children}
        </div>
      )}
    </Portal>
  );
};

export default Modal;
