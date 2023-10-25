import { FC } from 'react';
import { cx } from '@emotion/css';
import { env } from '@/config';

import { useNavigate } from '@/hooks/common/useNavigate';

import { clickableButtonStyle } from '@/utils/style/button';
import { adjust } from '@/utils/style/color';

export interface NavObject {
  name: string;
  path: string;
}
interface NavigatorProps {
  nav: NavObject[];
}

const highlighColor = adjust(env.colors.primary, -20);

const Navigator: FC<NavigatorProps> = ({ nav }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center select-none">
      {nav.map(({ name, path }, i) => {
        const isCurrent = window.location.pathname === path;

        return (
          <div
            key={i}
            style={{
              color: isCurrent ? highlighColor : 'inherit',
            }}
            className={cx(
              clickableButtonStyle,
              `py-2 transition-all text-lg cursor-pointer px-7 hover:text-primary-500`,
            )}
            onClick={() => navigate(path)}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Navigator;
