import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import NavigateAnchor from '@/components/common/NavigateAnchor';
import { cx } from '@emotion/css';
import { clickableButtonStyle } from '@/utils/style/button';

interface LoginButtonProps {
  path: string;
}

const LoginButton: FC<LoginButtonProps> = ({ path }) => {
  return (
    <NavigateAnchor path={path}>
      <Button
        width={100}
        className={cx(
          clickableButtonStyle,
          'font-normal bg-white border border-gray-300',
        )}
      >
        로그인
      </Button>
    </NavigateAnchor>
  );
};

export default LoginButton;
