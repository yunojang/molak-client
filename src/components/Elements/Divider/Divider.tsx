import React, { FC } from 'react';

interface DividerProps {
  color?: string;
  width?: string | number;
  height?: string | number;
  vertical?: boolean;
}

export const Divider: FC<DividerProps> = ({
  color = '#dddddd',
  height = '60%',
  width = '100%',
  vertical,
}) => {
  return (
    <div
      style={{
        height: vertical ? height : undefined,
        width: !vertical ? width : undefined,
        borderLeft: vertical ? '1px solid' : undefined,
        borderBottom: !vertical ? '1px solid' : undefined,
        borderColor: color,
      }}
    />
  );
};
