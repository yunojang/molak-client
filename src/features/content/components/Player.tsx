import { FC } from 'react';

import { Iframe } from '@/components/Elements/Iframe';
import { useContent } from '../api/getContent';

interface PlayerProps {
  id: string;
  width?: number | string;
  height?: number | string;
}

const Player: FC<PlayerProps> = ({ id, width, height }) => {
  const { content } = useContent(id);

  return (
    <Iframe
      style={{ width, height }}
      fallback={<PlayerFallback width={width} height={height} />}
      src={content?.url}
      title="YouTube video player"
      autoplay
    />
  );
};

export default Player;

export const PlayerFallback = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
}) => <div style={{ width, height }} className="bg-dark" />;
