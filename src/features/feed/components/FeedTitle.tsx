import { FC } from 'react';

interface FeedTitleProps {
  logo?: string;
  title: string;
}

const FeedTitle: FC<FeedTitleProps> = ({ title, logo }) => {
  return (
    <div className="flex items-center gap-3">
      {logo && <img src={logo} className="w-14 h-14" />}
      <div className="text-3xl font-bold ">{title}</div>
    </div>
  );
};

export default FeedTitle;
