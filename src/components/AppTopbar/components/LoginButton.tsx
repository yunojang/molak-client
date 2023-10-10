import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import NavigatePath from '@/components/common/NavigatePath';
import { cx } from '@emotion/css';
import { clickableButtonStyle } from '@/utils/style/button';

interface LoginButtonProps {
  path: string;
}

const LoginButton: FC<LoginButtonProps> = ({ path }) => {
  return (
    <NavigatePath path={path}>
      <Button
        width={100}
        className={cx(
          clickableButtonStyle,
          'font-normal bg-white border border-gray-300',
        )}
      >
        로그인
      </Button>
    </NavigatePath>
  );
};

export default LoginButton;
