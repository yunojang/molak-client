import React, { FC } from 'react';

interface VideoActionButtonProps {
  text?: string;
  icon?: React.ReactNode;
}

const VideoActionButton: FC<VideoActionButtonProps> = () => {
  return <div className="flex flex-col items-center justify-center"></div>;
};

export default VideoActionButton;
