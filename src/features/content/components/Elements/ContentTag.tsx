import { cx } from '@emotion/css';
import React, { FC } from 'react';

interface ContentTagProps {
  background?: string;
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

const ContentTag: FC<ContentTagProps> = ({
  background,
  children,
  color,
  className,
}) => {
  return (
    <div
      style={{ background, color }}
      className={cx(className, 'py-1 px-4 rounded-full')}
    >
      {children}
    </div>
  );
};

export default ContentTag;
