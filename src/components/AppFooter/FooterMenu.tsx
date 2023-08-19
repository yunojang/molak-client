import { FC } from 'react';
import { FooterInfoObject } from './info';

import { useAuth } from '@/features/auth/api/useAuth';
import { Authorization, POLICES } from '@/lib/auth/Authorization';

interface FooterMenuProps {
  route?: (path?: string) => void;
  contents: FooterInfoObject[];
}

const FooterMenu: FC<FooterMenuProps> = ({ contents, route = () => {} }) => {
  const { user } = useAuth();

  return (
    <div className="flex gap-20 text-[15px]">
      {contents.map((content, i) => (
        <Authorization
          key={i}
          policyCheck={POLICES.allowRoles(user, content?.auth)}
        >
          <div className="flex flex-col gap-3">
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
        </Authorization>
      ))}
    </div>
  );
};

export default FooterMenu;
