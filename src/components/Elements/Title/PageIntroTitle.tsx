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
  marginBottom = 0,
}) => {
  return (
    <header
      className="flex items-center justify-between"
      style={{ marginBottom: marginBottom * 4 }}
    >
      <div>
        <div className="inline-block mb-3 text-3xl font-bold">{text}</div>
        {description && <div>{description}</div>}
      </div>

      {extra}
    </header>
  );
};
