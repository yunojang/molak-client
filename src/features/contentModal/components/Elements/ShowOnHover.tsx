import { useDisclosure } from '@/hooks/useClosure';
import { LayoutProps } from '@/types';
import { css, keyframes } from '@emotion/css';
import { FC, useRef } from 'react';

interface ShowOnHoverProps extends LayoutProps {
  closeDelay?: number;
  initShow?: boolean;
}

const ShowOnHover: FC<ShowOnHoverProps> = ({
  children,
  closeDelay = 1500,
  initShow,
}) => {
  const {
    isOpen: isShow,
    onOpen: show,
    onClose: hide,
  } = useDisclosure(initShow);

  const timerRef = useRef<NodeJS.Timeout>();

  const showWithDelayReset = () => {
    show();
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const hideWithDelay = () => {
    timerRef.current = setTimeout(hide, closeDelay || 0);
  };

  return (
    <div
      style={{ opacity: isShow ? 1 : 0 }}
      onMouseEnter={showWithDelayReset}
      onMouseLeave={hideWithDelay}
      className="transition-opacity duration-100"
    >
      {children}
    </div>
  );
};

export default ShowOnHover;
