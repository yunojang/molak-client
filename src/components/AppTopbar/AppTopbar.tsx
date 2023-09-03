import { FC } from 'react';

import Navigator from './Navigator';
import { NAV } from './nav';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useContentWidth } from '@/hooks/useContentWidth';
import { cx } from '@emotion/css';
import { BreakPoint } from '@/utils/breakpoint';

interface AppTopbarProps {
  _?: any;
}

const AppTopbar: FC<AppTopbarProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-30 py-3 overflow-hidden bg-white border-b px-7 h-header">
      <div className={cx('content-box flex items-center justify-between pl-3')}>
        {/* left */}
        <BreakPoint size="md" better="eqBigger">
          <div className="flex items-center gap-5">
            <a href="/" className="inline-block pb-1 cursor-pointer">
              <img src="/asset/MOLAK_sm.png" className="h-[34px]" />
            </a>

            <Navigator nav={NAV} />
          </div>
        </BreakPoint>

        {/* right */}
        <div className="ml-auto">
          <Button
            width={92}
            className="font-normal bg-white border border-gray-300"
            onClick={() => navigate('/auth/login')}
          >
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppTopbar;
