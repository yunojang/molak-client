import { FC } from 'react';

interface TimeDisplayProps {
  progressTime: string;
  runningTime: string;
}

const TimeDisplay: FC<TimeDisplayProps> = ({ progressTime, runningTime }) => {
  return (
    <div className="flex items-center gap-1 px-2 ">
      <span className="text-white text-sm">{progressTime}</span>
      <span className="text-white text-sm">/</span>
      <span className="text-white text-sm">{runningTime}</span>
    </div>
  );
};

export default TimeDisplay;
