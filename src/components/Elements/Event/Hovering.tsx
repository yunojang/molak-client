import { FC, useEffect, useRef } from 'react';
import { LayoutProps } from '@/types';
import { callDelay } from '@/utils/timing/delay';

interface HoveringProps extends LayoutProps {
  delay?: number;
  onHover?: () => void;
  onLeave?: () => void;
}

// delay 타이밍은 onHover를 딜레이시킨다.
const Hovering: FC<HoveringProps> = ({
  delay = 0,
  onHover = () => {},
  onLeave,
  children,
}) => {
  const resetTimer = useRef<() => void>();

  useEffect(() => () => resetTimer.current?.(), []);

  const handleMousesEnter = () => {
    resetTimer.current = callDelay(onHover, delay);
  };

  const handleMousesLeave = () => {
    onLeave?.();
    resetTimer.current?.();
  };

  return (
    <div onMouseEnter={handleMousesEnter} onMouseLeave={handleMousesLeave}>
      {children}
    </div>
  );
};

export default Hovering;
