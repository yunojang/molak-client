import { FC } from 'react';

interface QuerPageTitleProps {
  query: string;
}

const QuerPageTitle: FC<QuerPageTitleProps> = ({ query }) => {
  return (
    <div className="font-bold text-3xl">
      <span>{`'${query}' `}</span>
      <span className="text-gray-500">검색 결과</span>
    </div>
  );
};

export default QuerPageTitle;
