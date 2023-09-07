import { useDisclosure } from '@/hooks/useClosure';
import { LayoutProps } from '@/types';
import { FC } from 'react';

interface ShowOnHoverProps extends LayoutProps {
  closeDelay?: number;
}

const ShowOnHover: FC<ShowOnHoverProps> = ({ children, closeDelay }) => {
  const { isOpen: isShow, onOpen: open, onClose: hide } = useDisclosure();

  return (
    <div
      style={{ opacity: isShow ? 1 : 0 }}
      onMouseEnter={open}
      onMouseLeave={hide}
      className="transition-opacity delay-75"
    >
      {children}
    </div>
  );
};

export default ShowOnHover;
