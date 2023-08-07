import { cx } from '@emotion/css';
import { FC, HtmlHTMLAttributes, ReactNode } from 'react';

interface PageLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={cx(className, 'pt-10 pl-space')}>
      {children}
    </div>
  );
};

export default PageLayout;
