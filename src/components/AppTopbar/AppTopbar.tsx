import { FC } from 'react';

import Navigator from './Navigator';
import { NAV } from './nav';
import { Button } from '@chakra-ui/react';

interface AppTopbarProps {
  _?: any;
}

const AppTopbar: FC<AppTopbarProps> = () => {
  return (
    <div className="px-7 py-4 pb-3 bg-white flex justify-between items-center">
      {/* left */}
      <div className="flex items-center gap-7">
        <a href="/" className="cursor-pointer inline-block pb-1">
          <img src="asset/MOLAK_sm.png" className="h-[35px]" />
        </a>

        <Navigator nav={NAV} />
      </div>

      {/* right */}
      <div>
        <Button className="border border-gray-300 bg-white font-normal">
          로그인
        </Button>
      </div>
    </div>
  );
};

export default AppTopbar;
