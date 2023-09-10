import { FC } from 'react';
import { cx } from '@emotion/css';
import { useBreakPoint } from '@/utils/breakpoint';

import { LayoutProps } from '@/types';
import { useParams } from 'react-router-dom';

interface ContentModalLayoutProps extends LayoutProps {
  _?: any;
  height?: string;
}

const ContentModalLayout: FC<ContentModalLayoutProps> = ({
  children,
  height,
}) => {
  const layout = useBreakPoint(p => {
    if (p.eqBigger('2xl')) return 'flex';
    // if (p.eqBigger('xl')) return 'flex-col';
    else return 'flex-col';
  });

  const gap = useBreakPoint(p => {
    if (p.eqBigger('xl')) return 'gap-3';
    else return 'gap-0';
  });

  return (
    <div style={{ height }} className={cx(layout, gap, `flex relative`)}>
      {children}
    </div>
  );
};

export default ContentModalLayout;
