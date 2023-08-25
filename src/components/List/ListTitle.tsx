import { FC, ReactNode } from 'react';

interface ListTitleProps {
  cnt?: number;
  extra?: ReactNode;
  mb?: number;
}

export const ListResultTitle: FC<ListTitleProps> = ({ cnt, extra, mb = 0 }) => {
  return (
    <div className="flex justify-between" style={{ marginBottom: mb * 4 }}>
      <div className="flex items-center gap-2 text-2xl font-bold">
        <span>검색결과</span>
        <span className="text-primary-500">{cnt}건</span>
      </div>

      {extra}
    </div>
  );
};
