import { FC } from 'react';
import { cx } from '@emotion/css';

import ToggleButton from '@/components/Elements/Button/ToggleButton';
import { clickableButtonStyle } from '@/utils/style/button';

import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export interface VolumeControlProps {
  volume: number;
  setVolume?(volume: number): void;
  muted: boolean;
  toggleMuted?(): void;
}

const VolumeControl: FC<VolumeControlProps> = ({
  muted,
  toggleMuted,
  volume,
  setVolume,
}) => {
  return (
    <ToggleButton value={muted ?? false} onChange={toggleMuted}>
      {v => (
        <div className={cx(clickableButtonStyle, 'p-2')}>
          {v ? (
            <FaVolumeMute size={24} color="white" />
          ) : (
            <FaVolumeUp size={24} color="white" />
          )}
        </div>
      )}
    </ToggleButton>
  );
};

export default VolumeControl;
