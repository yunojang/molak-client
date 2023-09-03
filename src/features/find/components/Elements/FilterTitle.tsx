import { Divider } from '@/components/Elements/Divider';
import { FC } from 'react';

interface FitlerTitleProps {
  title: string;
}

const FitlerTitle: FC<FitlerTitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-3 my-3">
      <Divider />
      <div className="text-[1.2rem] font-bold ">{title}</div>
    </div>
  );
};

export default FitlerTitle;
