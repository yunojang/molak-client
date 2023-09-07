import { FC } from 'react';
import { LayoutProps } from '@/types';
import ModalCloseButton from './ModalCloseButton';

interface VideoFrameProps extends LayoutProps {
  width: number | string;
  height: number | string;
  onClose?(): void;
}

const VideoFrame: FC<VideoFrameProps> = ({
  children,
  height,
  width,
  onClose,
}) => {
  return (
    <div
      className="rounded-md overflow-hidden bg-dark relative"
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default VideoFrame;
