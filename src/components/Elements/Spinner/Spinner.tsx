import { FC } from 'react';
import { cx, css } from '@emotion/css';
import { Spinner as NxSpinner, useTheme } from '@wizrnd/nx-ui';

type Position = 'float' | 'inline' | 'center';

export interface SpinnerProps {
  position?: Position;
  className?: string;
  color?: string;
  size?: number;
}

export const Spinner: FC<SpinnerProps> = ({
  position = 'float',
  color: color_,
  className,
  size,
}) => {
  const theme = useTheme();
  const color = color_ ?? theme.palette.primary.main;

  return (
    <div className={cx(style, position, className)}>
      <NxSpinner size={size} color={color} />
    </div>
  );
};

const style = css`
  z-index: 2;
  margin: 10px;

  &.float {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &.inline {
    display: inline-block;
    margin: 0px;
  }

  &.center {
    display: block;
    margin: 10px auto;
    width: fit-content;
  }
`;
