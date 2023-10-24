import { css } from '@emotion/css';

export const scrollYStyle = css`
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
    padding: 4px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #878787b2;
    border-radius: 8px;
    border: 1px solid white;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 8px;
  }
`;

export const scrollXStyle = css`
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
`;
