import { FC } from 'react';

import { Iframe } from '@/components/Elements/Iframe';
import { useContent } from '../api/getContent';

interface PlayerProps {
  id: string;
  width?: number;
  height?: number;
}

const Player: FC<PlayerProps> = ({ id, width, height }) => {
  const { content } = useContent(id);

  return (
    <Iframe
      fallback={<PlayerFallback width={width} height={height} />}
      width={width}
      height={height}
      src={content.url}
      title="YouTube video player"
    />
  );
};

export default Player;

export const PlayerFallback = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => <div style={{ width, height }} className="bg-black" />;
