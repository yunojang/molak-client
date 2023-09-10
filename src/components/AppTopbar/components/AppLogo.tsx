import { FC } from 'react';

interface AppLogoProps {
  href?: string;
}

const AppLogo: FC<AppLogoProps> = ({ href }) => {
  return (
    <a href={href ?? '/'} className="inline-block pb-[2px] cursor-pointer">
      <img src="/asset/MOLAK_sm.png" className="h-[34px]" />
    </a>
  );
};

export default AppLogo;
