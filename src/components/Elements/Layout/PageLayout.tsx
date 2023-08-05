import { FC, ReactNode } from 'react';

interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <div className="pl-space pt-10">{children}</div>;
};

export default PageLayout;
