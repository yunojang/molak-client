import { FC } from 'react';

interface BubbleProps {
  size?: number | string;
  color?: string;
  children?: React.ReactNode;
}

const Bubble: FC<BubbleProps> = ({ color, size, children }) => {
  return (
    <div
      style={{ background: color, width: size, height: size }}
      className="absolute rounded-full text-sm -top-[4px] -right-0.5 text-center text-white font-bold z-10"
    >
      {children}
    </div>
  );
};

export default Bubble;
