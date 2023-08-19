import { FC, ReactElement, cloneElement } from 'react';

interface IconButtonProps {
  size?: number;
  color?: string;
  background?: string;
  children?: ReactElement;
  onClick?(): void;
}

const IconButton: FC<IconButtonProps> = ({
  background = '#00000040',
  color = '#fff',
  size = 11,
  children = <></>,
  onClick,
}) => {
  return (
    <div
      className="rounded-full flex items-center justify-center cursor-pointer"
      style={{ width: size * 4, height: size * 4, background, color }}
      onClick={onClick}
    >
      {cloneElement(children, { size, color, ...children.props })}
    </div>
  );
};

export default IconButton;
