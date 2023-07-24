import { FC } from 'react';
import { cx } from '@emotion/css';

import { useContentWidth } from '@/hooks/useContentWidth';

import { Title } from '../Elements/Title';
import { TitleObject } from './titles';

interface CTPPageProps {
  contentWidth?: string | string[];
  children?: React.ReactNode;
  titleExtra?: React.ReactNode;
  title?: TitleObject;
}

const CTPPage: FC<CTPPageProps> = ({
  title,
  titleExtra,
  contentWidth = [],
  children,
}) => {
  const widths =
    typeof contentWidth === 'object'
      ? contentWidth
      : contentWidth.repeat(5).split('');

  const { cls } = useContentWidth({ widths });

  return (
    <div className={cx(cls, 'p-5 py-10')}>
      <div className="flex items-end justify-between mb-10">
        {title && <Title text={title.text} description={title.description} />}
        {titleExtra}
      </div>
      {children}
    </div>
  );
};

export default CTPPage;
