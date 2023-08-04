import { FC } from 'react';
import { FooterInfoObject } from './info';

interface FooterInfoProps {
  route?: (path?: string) => void;
  contents: FooterInfoObject[];
}

const FooterInfo: FC<FooterInfoProps> = ({ contents }) => {
  return (
    <div className="flex items-center gap-3">
      <img src="/asset/icon_white.png" />
      <div className="h-full w-[1px] bg-white" />
      {contents.map((content, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
};

export default FooterInfo;
