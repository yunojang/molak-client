import { LayoutProps } from '@/types';
import { FC } from 'react';

interface CircleProps extends LayoutProps {
  size?: number | string;
  background?: string;
  color?: string;
}

export const Circle: FC<CircleProps> = ({
  background,
  color,
  size = '3em',
  children,
}) => {
  return (
    <div
      style={{ width: size, height: size, color, background }}
      className="border rounded-full overflow-hidden flex justify-center items-center text-lg"
    >
      {children}
    </div>
  );
};
