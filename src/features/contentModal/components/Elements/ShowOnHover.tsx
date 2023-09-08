import { useDisclosure } from '@/hooks/useClosure';
import { LayoutProps } from '@/types';
import { FC, useRef } from 'react';

interface ShowOnHoverProps extends LayoutProps {
  closeDelay?: number;
  initShow?: boolean;
}

const ShowOnHover: FC<ShowOnHoverProps> = ({
  children,
  closeDelay = 2000,
  initShow,
}) => {
  const {
    isOpen: isShow,
    onOpen: show,
    onClose: hide,
  } = useDisclosure(initShow);

  const timer = useRef<NodeJS.Timer>(null);

  const showWithDelayReset = () => {
    show();
  };
  const hideWithDelay = () => {
    // timer.current = setTimeout(() => hide(), closeDelay || 0);
  };

  return (
    <div
      style={{ opacity: isShow ? 1 : 0 }}
      onMouseEnter={show}
      onMouseLeave={hideWithDelay}
      className="transition-opacity duration-75"
    >
      {children}
    </div>
  );
};

export default ShowOnHover;
