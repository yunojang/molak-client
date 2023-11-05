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
  height = '100%',
}) => {
  const layout = useBreakPoint(p => {
    if (p.eqBigger('2xl')) return 'flex';
    // if (p.eqBigger('xl')) return 'flex';
    // if (p.eqBigger('xl')) return 'flex-col';
    else return 'flex-col h-screen';
  });

  const gap = useBreakPoint(p => {
    if (p.eqBigger('2xl')) return 'gap-3';
    else return 'gap-0';
  });

  return (
    <div
      style={{ height }}
      className={cx(layout, gap, `flex relative items-center`)}
    >
      {children}
    </div>
  );
};

export default ContentModalLayout;
