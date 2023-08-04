import { FC } from 'react';
import { FooterInfoObject } from './info';

interface FooterMenuProps {
  route?: (path?: string) => void;
  contents: FooterInfoObject[];
}

const FooterMenu: FC<FooterMenuProps> = ({ contents, route = () => {} }) => {
  return (
    <div className="flex gap-24 text-[15px]">
      {contents.map((content, i) => (
        <div key={i} className="flex flex-col gap-3">
          <span className="font-bold">{content.name}</span>
          {content.children?.map((child, i) => (
            <div
              key={i}
              onClick={() => route(child.path)}
              className="cursor-pointer whitespace-nowrap"
            >
              {child.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
