import { FC } from 'react';

import Navigator from './Navigator';
import { NAV } from './nav';
import { cx } from '@emotion/css';
import { BreakPoint } from '@/utils/breakpoint';
import AppLogo from './components/AppLogo';
import NavLayuout from './components/NavLayout';
import LoginButton from './components/LoginButton';
import SearchButton from './components/SearchButton';

interface AppTopbarProps {
  _?: any;
}

const AppTopbar: FC<AppTopbarProps> = () => {
  return (
    <div className="sticky top-0 z-30 py-3 overflow-hidden bg-white border-b px-5 h-header">
      <div className={cx('content-box flex items-center justify-between pl-3')}>
        {/* left */}
        <BreakPoint size="md" better="eqBigger">
          <NavLayuout>
            <AppLogo />
            <Navigator nav={NAV} />
          </NavLayuout>
        </BreakPoint>

        {/* right */}
        <NavLayuout>
          <SearchButton path="/search" />
          <LoginButton path="/auth/login" />
        </NavLayuout>
      </div>
    </div>
  );
};

export default AppTopbar;
