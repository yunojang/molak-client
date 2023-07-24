import React, { FC, ReactNode } from 'react';

export interface TitleProps {
  text: string;
  description?: string;
  extra?: ReactNode;
  marginBottom?: string | number;
}

export const Title: FC<TitleProps> = ({
  text,
  description,
  extra,
  marginBottom,
}) => {
  return (
    <header
      className="flex items-center justify-between"
      style={{ marginBottom }}
    >
      <div>
        <div className="inline-block mb-2 text-2xl font-bold">{text}</div>
        {description && (
          <div className="text-sm font-bold text-gray-400">{description}</div>
        )}
      </div>

      {extra}
    </header>
  );
};
