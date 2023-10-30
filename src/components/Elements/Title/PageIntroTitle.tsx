import { useText } from '@/hooks/responsive/usePadding';
import { cx } from '@emotion/css';
import React, { FC, ReactNode } from 'react';

export interface TitleProps {
  text: string;
  description?: string;
  extra?: ReactNode;
  marginBottom?: number;
}

export const PageIntroTitle: FC<TitleProps> = ({
  text,
  description,
  extra,
  marginBottom = 7,
}) => {
  const { md, xxl } = useText();
  return (
    <header
      className="flex items-center justify-between"
      style={{ margin: '0.8em 0', marginBottom: marginBottom * 4 }}
    >
      <div>
        <div className={cx(xxl.className, 'inline-block mb-1 font-bold')}>
          {text}
        </div>
        {description && (
          <div className={cx(md.className, 'text-gray-500')}>{description}</div>
        )}
      </div>

      {extra}
    </header>
  );
};
