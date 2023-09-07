import { FC } from 'react';
// import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
// import { useNavigate } from 'react-router-dom';

import { IconButton } from '@/components/Elements/IconButton';
import { IoClose } from 'react-icons/io5';

interface ModalCloseButtonProps {
  onClick?(): void;
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({ onClick }) => {
  // const navigate = useNavigate(); // has background location
  // const bgLocation = useBackgroundLocation();

  // const modalClose = () => navigate(bgLocation ?? '/');

  return (
    <IconButton size={12} onClick={onClick}>
      <IoClose size={34} color="#fff" />
    </IconButton>
  );
};

export default ModalCloseButton;
