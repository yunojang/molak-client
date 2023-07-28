import { css } from '@emotion/css';

export const lineBreak = (line: number) => css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
`;
