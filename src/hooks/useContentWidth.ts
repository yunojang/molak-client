import { useBreakPoint } from '@/utils/breakpoint';
import { css } from '@emotion/css';
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

interface Args {
  widths?: string[];
}

export const useContentWidth = ({ widths = [] }: Args = {}) => {
  const width = useBreakPoint(p => {
    if (p.same('2xl')) {
      // full
      return widths[0] ?? '1400px';
    } else if (p.smaller('lg')) {
      // mobile
      return widths[2] ?? '96%';
    } else {
      // default
      return widths[1] ?? '84%';
    }
  });
  const [viewWidth, setViewWidth] = useState(
    document.documentElement.getBoundingClientRect().width,
  );

  useEffect(() => {
    const onResize = throttle(
      () =>
        setViewWidth(document.documentElement.getBoundingClientRect().width),
      600,
    );

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const contentWidth = width.endsWith('%')
    ? (viewWidth * +width.slice(0, -1)) / 100
    : parseInt(width, 10);
  const marginWidth = (viewWidth - contentWidth) / 2;

  const cls = css`
    width: ${width};
    margin: 0 auto;
  `;

  return {
    viewWidth,
    contentWidth,
    marginWidth,
    width,
    cls,
  };
};
