import { css } from '@emotion/css';

export const lineBreak = (line: number) => css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
`;

export const scrollStyle = css`
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
