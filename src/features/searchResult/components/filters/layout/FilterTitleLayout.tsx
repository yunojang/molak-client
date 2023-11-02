import { LayoutProps } from '@/types';
import { FC } from 'react';

interface FilterTitleLayoutProps extends LayoutProps {
  title: string;
}

const FilterTitleLayout: FC<FilterTitleLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white shadow-xl rounded-xl">
      <header className="font-bold text-lg">{title}</header>
      {children}
    </div>
  );
};

export default FilterTitleLayout;
