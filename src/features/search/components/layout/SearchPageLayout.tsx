import { FC } from 'react';
import { cx } from '@emotion/css';

import { LayoutProps } from '@/types';
import { useContentWidth } from '@/hooks/useContentWidth';

interface SearchPageLayoutProps extends LayoutProps {
  _?: never;
}

const SearchPageLayout: FC<SearchPageLayoutProps> = ({ children }) => {
  const { cls: contentWidthCls } = useContentWidth();

  return (
    <div
      className={cx(
        'flex flex-col items-center justify-center overflow-hidden',
        contentWidthCls,
      )}
    >
      {children}
    </div>
  );
};

export default SearchPageLayout;
