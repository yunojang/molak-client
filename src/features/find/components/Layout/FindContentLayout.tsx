import { useContentWidth } from '@/hooks/useContentWidth';
import { LayoutProps } from '@/types';
import { FC } from 'react';

interface FindContentLayoutProps extends LayoutProps {
  _?: any;
}

const FindContentLayout: FC<FindContentLayoutProps> = ({ children }) => {
  const { cls } = useContentWidth({ widths: ['97%', '95%'] });

  return <div className={cls}>{children}</div>;
};

export default FindContentLayout;
