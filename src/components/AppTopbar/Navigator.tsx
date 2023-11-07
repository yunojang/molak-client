import { FC } from 'react';
import { cx } from '@emotion/css';
import { env } from '@/config';

import { useNavigate } from '@/hooks/common/useNavigate';

import { clickableButtonStyle } from '@/utils/style/button';
import { adjust } from '@/utils/style/color';
import { useSizeRate, useText } from '@/hooks/responsive/usePadding';

export interface NavObject {
  name: string;
  path: string;
}
interface NavigatorProps {
  nav: NavObject[];
}

const Navigator: FC<NavigatorProps> = ({ nav }) => {
  const navigate = useNavigate();
  const {
    standard: { size },
  } = useSizeRate(28);
  const { lg } = useText();

  return (
    <div className="flex items-center select-none">
      {nav.map(({ name, path }, i) => {
        const isCurrent = window.location.pathname === path;

        return (
          <div
            key={i}
            style={{ paddingLeft: size, paddingRight: size }}
            className={cx(
              clickableButtonStyle,
              lg.className,
              isCurrent ? 'text-secondary font-semibold' : 'text-black',
              `py-2 transition-all  cursor-pointer hover:text-secondary`,
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
