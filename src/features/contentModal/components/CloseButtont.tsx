import { FC } from 'react';

import { IconButton } from '@/components/Elements/IconButton';
import { IoClose } from 'react-icons/io5';
import { clickableButtonStyle } from '@/utils/style/button';

interface CloseButtonProps {
  onClick?(): void;
}

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button className={clickableButtonStyle} onClick={onClick}>
      <IconButton background="#000000aa" color="white" size={13}>
        <IoClose size={34} />
      </IconButton>
    </button>
  );
};

export default CloseButton;
