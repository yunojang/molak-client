import { FC } from 'react';
import { cx } from '@emotion/css';
import { useBreakPoint } from '@/utils/breakpoint';

import { LayoutProps } from '@/types';

interface ContentModalLayoutProps extends LayoutProps {
  _?: any;
  height?: string;
}

const ContentModalLayout: FC<ContentModalLayoutProps> = ({
  children,
  height,
}) => {
  const layout = useBreakPoint(p => {
    if (p.eqBigger('2xl')) return 'flex gap-2';
    // if (p.eqBigger('xl')) return 'flex-col';
    else return 'flex-col';
  });

  const gap = useBreakPoint(p => {
    if (p.eqBigger('xl')) return 'gap-2';
    else return 'gap-0';
  });

  return (
    <div style={{ height }} className={cx(layout, gap, `flex `)}>
      {children}
    </div>
  );
};

export default ContentModalLayout;
