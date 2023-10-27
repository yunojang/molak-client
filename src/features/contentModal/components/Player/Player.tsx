import { FC, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

// import { useContent } from '../api/getContent';
// import { Iframe } from '@/components/Elements/Iframe';

import { Spinner } from '@/components/Elements/Spinner';
import { BaseReactPlayerProps } from 'react-player/base';

export interface PlayerProps extends BaseReactPlayerProps {
  url?: string;
  width?: number | string;
  height?: number | string;
  played?: number;
  onChangeVolumn?(volume: number): void;
}

const Player: FC<PlayerProps> = ({
  url,
  width,
  height,
  playIcon = <Spinner size={60} />,
  played = 0,
  volume = 0,
  onChangeVolumn,
  ...playerProps
}) => {
  const ref = useRef<ReactPlayer>(null);

  useEffect(() => {
    ref.current?.seekTo(played);
  }, [played]);

  return (
    <ReactPlayer
      ref={ref}
      key={url}
      url={url}
      width={width}
      height={height}
      volume={volume / 100}
      {...playerProps}
      controls={false}
      loop={false}
      config={{
        youtube: {
          playerVars: { fs: 0, modestbranding: 1 },
        },
      }}
      // fallback={
      //   <div className="flex justify-center items-center font-bold text-white">
      //     유튜브 로딩중
      //   </div>
      // }
    />

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
