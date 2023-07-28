import { FC } from 'react';

import Navigator from './Navigator';
import { NAV } from './nav';
import { Button } from '@chakra-ui/react';

interface AppTopbarProps {
  _?: any;
}

const AppTopbar: FC<AppTopbarProps> = () => {
  return (
    <div className="flex items-center justify-between py-4 pb-3 bg-white px-7">
      {/* left */}
      <div className="flex items-center gap-7">
        <a href="/" className="inline-block pb-1 cursor-pointer">
          <img src="/asset/MOLAK_sm.png" className="h-[35px]" />
        </a>

        <Navigator nav={NAV} />
      </div>

      {/* right */}
      <div>
        <Button className="font-normal bg-white border border-gray-300">
          로그인
        </Button>
      </div>
    </div>
  );
};

export default AppTopbar;
