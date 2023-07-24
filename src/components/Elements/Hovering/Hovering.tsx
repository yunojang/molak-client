import { cx } from '@emotion/css';
import React, { FC, ReactElement, useState } from 'react';

export interface HoveringProps {
  children: ReactElement;
  className?: string;
  hoverClassName?: string;
}

export const Hovering: FC<HoveringProps> = ({
  children,
  className,
  hoverClassName,
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {React.cloneElement(children, {
        className: isHover ? cx(className, hoverClassName) : className,
      })}
    </div>
  );
};
