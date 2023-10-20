import { FC } from 'react';

import { IconButton } from '@/components/Elements/IconButton';
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi';
import { BsFullscreen } from 'react-icons/bs';
import ToggleButton from '@/components/Elements/Button/ToggleButton';
import { cx } from '@emotion/css';
import { clickableButtonStyle } from '@/utils/style/button';

export interface FullScreenControlProps {
  fullScreen?: boolean;
  onFullScreen?(): void;
  onExitFullScreen?(): void;
}

const FullScreenControl: FC<FullScreenControlProps> = ({
  fullScreen,
  onFullScreen,
  onExitFullScreen,
}) => {
  return (
    <ToggleButton
      value={fullScreen ?? false}
      onChange={v => (v ? onFullScreen?.() : onExitFullScreen?.())}
    >
      {v => (
        <div className={cx(clickableButtonStyle, 'p-2')}>
          {v ? (
            <BiExitFullscreen size={26} color="white" />
          ) : (
            <BiFullscreen size={26} color="white" />
          )}
        </div>
      )}
    </ToggleButton>
  );
};

export default FullScreenControl;
