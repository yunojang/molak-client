import { FC } from 'react';
import { FooterInfoObject } from './info';

import { useAuth } from '@/features/auth/api/useAuth';
import { Authorization, POLICES } from '@/lib/auth/Authorization';
import { BreakPoint, useBreakPoint } from '@/utils/breakpoint';
import { cx } from '@emotion/css';

interface FooterMenuProps {
  route?: (path?: string) => void;
  contents: FooterInfoObject[];
}

const FooterMenu: FC<FooterMenuProps> = ({ contents, route = () => {} }) => {
  const { user } = useAuth();
  const containerStyle = useBreakPoint(p =>
    p.bigger('md') ? 'flex gap-20' : 'flex flex-col gap-3',
  );

  return (
    <div className={cx(containerStyle)} style={{ fontSize: '15px' }}>
      {contents.map((content, i) => (
        <Authorization
          key={i}
          policyCheck={POLICES.allowRoles(user, content?.auth)}
        >
          <div className="flex flex-col gap-3">
            <BreakPoint size="md" better="bigger">
              <span className="font-bold">{content.name}</span>
            </BreakPoint>

            {content.children?.map((child, i) => (
              <div
                key={i}
                onClick={() => route(child.path)}
                className={`
                  cursor-pointer whitespace-nowrap text-left 
                  md:text-center sm:text-center
                `}
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
