import React, { FC, useContext, useEffect } from 'react';
import { Portal } from '../Portal';
import { ModalContext } from '@/lib/modal/ModalContext';

import { useBodyScrollLock } from '@/hooks/useBodySrollLock';
import { css, cx, keyframes } from '@emotion/css';
import { useOnKeyDown } from '@/hooks/useOnKeyDown';

const position_class = {
  top: 'top-0',
  bottom: 'bottom-0',
  left: 'left-0',
  right: 'right-0',
  tl: 'top-0 left-0',
  tr: 'top-0 right-0',
  bl: 'bottom-0 left-0',
  br: 'bottom-0 right-0',
};

interface ModalProps {
  isOpen?: boolean;
  open?(): void;
  close?(): void;
  children?: React.ReactNode;
  fixedChildren?: React.ReactNode;
  extra?: React.ReactNode;
  extraPosition?: keyof typeof position_class;
  overflow?: 'scroll' | 'hidden';
  overflowY?: 'scroll' | 'hidden';
  overflowX?: 'scroll' | 'hidden';
  escapeKeyClose?: boolean;
}

const Modal: FC<ModalProps> = ({
  children,
  fixedChildren,
  close,
  isOpen,
  open,
  escapeKeyClose = true,
  extraPosition = 'tr',
  extra,
  overflow,
  overflowY,
  overflowX = 'hidden',
}) => {
  const targetId = useContext(ModalContext);
  const { lockScroll, releaseScroll } = useBodyScrollLock();

  useEffect(() => {
    if (isOpen) lockScroll();
    return releaseScroll;
  }, [isOpen, lockScroll, releaseScroll]);

  useOnKeyDown('Escape', () => escapeKeyClose && close?.());

  return (
    <Portal targetId={targetId}>
      {isOpen && (
        <div
          className="w-screen h-screen bg-black bg-opacity-[0.35] relative flex justify-center items-center transition-all"
          style={{ overflow, overflowY, overflowX }}
          onClick={e => {
            if (e.target === e.currentTarget) close?.();
          }}
        >
          <div className="modal-fixed-contents">{fixedChildren}</div>

          <div
            className={cx(
              animate,
              'transition-all max-h-full max-w-full',
              'modal-contents',
            )}
          >
            {children}
          </div>
          <div className={cx(position_class[extraPosition], 'absolute')}>
            {extra}
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Modal;

const popup = keyframes`
  from {
    transform: translateY(50%);
    /* transform: scale(0.5); */
    opacity: 0;
  }
  to {
    transform: translateY(0);
    /* transform: scale(1); */
    opacity: 1;
  }
`;

const animate = css`
  animation: ${popup} 0.25s cubic-bezier(0, 0, 0, 1);
`;
