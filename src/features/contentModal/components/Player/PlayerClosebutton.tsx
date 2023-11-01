import { FC } from 'react';
import CloseButton from '../Elements/CloseButtont';
import { useCoverNavigate } from '../../hooks/useCoverNavigate';

interface PlayerCloseButtonProps {
  size?: number;
}

const PlayerCloseButton: FC<PlayerCloseButtonProps> = ({ size }) => {
  const { coverClose } = useCoverNavigate();

  return (
    <div className="absolute top-3 right-3 z-30">
      <CloseButton onClick={coverClose} />
    </div>
  );
};

export default PlayerCloseButton;
