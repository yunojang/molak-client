import { FC, useEffect, useMemo, useState } from 'react';
import { css, cx, keyframes } from '@emotion/css';

import ToggleButton from '@/components/Elements/Button/ToggleButton';
import { clickableButtonStyle } from '@/utils/style/button';

import { FaVolumeXmark, FaVolumeHigh, FaVolumeLow } from 'react-icons/fa6';
import Hovering from '@/components/Elements/Event/Hovering';
import { Slider } from '@/components/Elements/Slider';

export interface VolumeControlProps {
  volume: number;
  setVolume?(volume: number): void;
  muted: boolean;
  setMuted?(muted: boolean): void;
}

const VolumeControl: FC<VolumeControlProps> = ({
  muted,
  setMuted,
  volume,
  setVolume,
}) => {
  // default volumn 저장 시키기

  const [isHover, setIsHover] = useState(false);
  const [sliding, setSliding] = useState(false);

  const showVolSlider = useMemo(() => isHover || sliding, [isHover, sliding]);

  const handleVolume = (volume: number) => {
    setMuted?.(volume == 0);
    setVolume?.(volume);
    if (volume == 0) setVolume?.(100);
  };

  return (
    <div>
      <Hovering
        onHover={() => setIsHover(true)}
        onLeave={() => setIsHover(false)}
      >
        <div className="flex gap-1 items-center">
          <ToggleButton
            className={cx(clickableButtonStyle, 'w-6 h-8 text-left')}
            value={muted ?? false}
            onChange={() => setMuted?.(!muted)}
          >
            {isMute =>
              isMute || volume == 0 ? (
                <FaVolumeXmark size={21} color="white" />
              ) : volume > 50 ? (
                <FaVolumeHigh size={22} color="white" />
              ) : (
                <FaVolumeLow size={20} color="white" />
              )
            }
          </ToggleButton>

          <div
            className={cx(
              'overflow-hidden h-8',
              showVolSlider ? 'w-[90px]' : 'w-0',
              'transition-all duration-300',
            )}
          >
            <div className="pl-2 flex items-center h-full">
              <VolumnSlider
                setVolume={handleVolume}
                volume={muted ? 0 : volume}
                onChanging={setSliding}
              />
            </div>
          </div>
        </div>
      </Hovering>
    </div>
  );
};

export default VolumeControl;

const VolumnSlider: FC<{
  volume: number;
  setVolume?(volume: number): void;
  onChanging?(isChanging: boolean): void;
}> = ({ setVolume, volume, onChanging }) => {
  return (
    <Slider
      width="75px"
      min={0}
      max={100}
      value={volume}
      onChange={setVolume}
      onChangeStart={() => onChanging?.(true)}
      onChangeEnd={() => onChanging?.(false)}
    />
  );
};
