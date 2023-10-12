import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

// import { useContent } from '../api/getContent';

import { Iframe } from '@/components/Elements/Iframe';
import { Spinner } from '@/components/Elements/Spinner';
import { Content } from '../../content/types/dto';
import { BaseReactPlayerProps } from 'react-player/base';

export interface PlayerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  onProgress?: BaseReactPlayerProps['onProgress'];
  onDuration?: BaseReactPlayerProps['onDuration'];
  onPlay?: () => void;
  onPause?: () => void;
}

const Player: FC<PlayerProps> = ({
  url: inputUrl,
  width,
  height,
  onDuration,
  onPause,
  onPlay,
  onProgress,
}) => {
  const [settings, setSettings] = useState<BaseReactPlayerProps>({
    url: undefined,
  });
  useEffect(() => setSettings({ url: inputUrl }), [inputUrl]);

  return (
    <div className="relative">
      <ReactPlayer
        {...settings} // url
        width={width}
        height={height}
        controls
        playing={true}
        loop={false}
        // fallback={
        //   <div className="flex justify-center items-center font-bold text-white">
        //     유튜브 로딩중
        //   </div>
        // }
        onProgress={onProgress}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onPause}
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
  color,
}: {
  width?: number | string;
  height?: number | string;
  color?: string;
}) => (
  <div
    style={{ width, height }}
    className="bg-dark flex justify-center items-center"
  >
    <Spinner size={60} color={color} />
  </div>
);
