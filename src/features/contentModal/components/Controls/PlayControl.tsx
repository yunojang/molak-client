import { FC } from 'react';
import { cx } from '@emotion/css';

import ToggleButton from '@/components/Elements/Button/ToggleButton';
import { clickableButtonStyle } from '@/utils/style/button';

import { BsPauseFill } from 'react-icons/bs';
import { BsPlayFill } from 'react-icons/bs';

export interface PlayControlProps {
  playing?: boolean;
  play?(): void;
  pause?(): void;
}

const PlayControl: FC<PlayControlProps> = ({ pause, play, playing }) => {
  return (
    <ToggleButton
      value={playing ?? false}
      onChange={v => (v ? play?.() : pause?.())}
    >
      {v => (
        <div className={cx(clickableButtonStyle, 'p-2 px-3')}>
          {v ? (
            <BsPauseFill size={32} color="white" />
          ) : (
            <BsPlayFill size={32} color="white" />
          )}
        </div>
      )}
    </ToggleButton>
  );
};

export default PlayControl;
