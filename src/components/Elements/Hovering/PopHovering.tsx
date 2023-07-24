import { css, cx } from '@emotion/css';
import { FC, ReactElement } from 'react';
import { Hovering } from './Hovering';

interface PopHoveringProps {
  children: ReactElement;
  transition?: string;
  height?: string;
}

const PopHovering: FC<PopHoveringProps> = ({
  height = '8px',
  children,
  transition,
}) => {
  return (
    <Hovering
      className={cx(children.props.className, init(transition))}
      hoverClassName={cx(children.props.className, hover(height))}
    >
      {children}
    </Hovering>
  );
};

export default PopHovering;

const hover = (height: string) => css`
  box-shadow: 1px 1px 14px 0px rgba(0, 0, 0, 0.13) !important;
  top: -${height};
`;

const init = (t?: string) => css`
  transition: ${t ?? '0.28s'};
  position: relative;
  top: 0px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1) !important;
`;
