import { FC } from 'react';

import { useLocation } from '@/hooks/useLocation';
import MolakIcon from '@/components/Icon/MolakIcon';
import SocialButton from '../../components/SocialButton';
import { env } from '@/config';
import { useContentWidth } from '@/hooks/useContentWidth';
import { cx } from '@emotion/css';

interface LoginPageProps {
  _?: any;
}

const LoginPage: FC<LoginPageProps> = () => {
  const state = useLocation().state as { redirectUrl?: string };
  const redirectUrl = state?.redirectUrl ?? '/';

  const { cls } = useContentWidth({ widths: ['550px', '50%'] });

  return (
    <div className="w-screen h-screen bg-dark text-white">
      <div
        className={cx(
          cls,
          'flex justify-center items-center flex-col h-full mx-auto gap-5',
        )}
      >
        <div className="flex flex-col gap-5 items-center">
          <MolakIcon text={{ color: '#fff' }} />
          <div className="text-2xl">
            <span className="font-bold">웹드라마</span>를 쉽고 간편하게
            시청하세요
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center w-full">
          <SocialButton
            fullWidth
            social="kakao"
            logo={<img src={env.app.public_url + '/asset/social/kakao.png'} />}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
