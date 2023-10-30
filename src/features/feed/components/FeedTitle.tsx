import { FC } from 'react';
import { cx } from '@emotion/css';

import { useText } from '@/hooks/responsive/usePadding';

interface FeedTitleProps {
  logo?: string;
  title: string;
}

const FeedTitle: FC<FeedTitleProps> = ({ title, logo }) => {
  const {
    xxl: { className },
  } = useText();
  return (
    <div className="flex items-center gap-3">
      {logo && <img src={logo} className="w-14 h-14" />}
      <div className={cx(className, 'font-bold ')}>{title}</div>
    </div>
  );
};

export default FeedTitle;
