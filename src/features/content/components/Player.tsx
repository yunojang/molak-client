import { FC, useState } from 'react';
import ReactPlayer from 'react-player';

// import { useContent } from '../api/getContent';

import { Iframe } from '@/components/Elements/Iframe';
import { Spinner } from '@/components/Elements/Spinner';
import { Content } from '../types/dto';
import { BaseReactPlayerProps } from 'react-player/base';

export interface PlayerProps {
  content: Content;
  width?: number | string;
  height?: number | string;
  onProgress?: BaseReactPlayerProps['onProgress'];
  onDuration?: BaseReactPlayerProps['onDuration'];
  onPlay?: () => void;
  onPause?: () => void;
}

const Player: FC<PlayerProps> = ({
  content,
  width,
  height,
  onDuration,
  ...props
}) => {
  return (
    <div className="relative">
      <ReactPlayer
        {...props}
        url={content?.url}
        width={width}
        height={height}
        controls
        playing
        loop={false}
        fallback={<PlayerFallback width={width} height={height} />}
        onEnded={props.onPause}
        onDuration={onDuration}
      />
    </div>
    // <Iframe
    //   style={{ width, height }}
    //   fallback={<PlayerFallback width={width} height={height} />}
    //   src={content?.url}
    //   title="YouTube video player"
    //   autoplay
    // />
  );
};

export default Player;

export const PlayerFallback = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
}) => (
  <div
    style={{ width, height }}
    className="bg-dark flex justify-center items-center"
  >
    <Spinner size={60} />
  </div>
);
