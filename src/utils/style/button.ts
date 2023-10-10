import { css } from '@emotion/css';

export const clickableButtonStyle = css`
  cursor: pointer;
  transition: 200ms;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;
