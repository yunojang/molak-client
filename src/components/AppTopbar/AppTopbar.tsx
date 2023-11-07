import { FC } from 'react';
import { cx } from '@emotion/css';

import Navigator from './Navigator';
import { NAVIGATION } from './nav';
import { BreakPoint } from '@/utils/breakpoint';
import AppLogo from './components/AppLogo';
import NavLayuout from './components/NavLayout';
import LoginButton from './components/LoginButton';
import SearchButton from './components/SearchButton';
import TopbarLayout from './components/TopbarLayout';

interface AppTopbarProps {
  _?: any;
}

const AppTopbar: FC<AppTopbarProps> = () => {
  return (
    <TopbarLayout>
      <div className={cx(' flex items-center w-full justify-between pl-3')}>
        {/* left */}
        <NavLayuout>
          <AppLogo />
          <BreakPoint size="md" better="eqBigger">
            <Navigator nav={NAVIGATION} />
          </BreakPoint>
          <BreakPoint size="md" better="smaller">
            <Navigator nav={NAVIGATION.filter((_, i) => i == 0)} />
          </BreakPoint>
        </NavLayuout>

        {/* right */}
        <NavLayuout>
          <SearchButton path="/search" />
          {/* <LoginButton path="/auth/login" /> */}
        </NavLayuout>
      </div>
    </TopbarLayout>
  );
};

export default AppTopbar;
