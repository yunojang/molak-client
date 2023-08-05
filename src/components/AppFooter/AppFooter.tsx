import { FC } from 'react';

import { withRoute } from '../Wrapper/withRouter';
import FooterMenu from './FooterMenu';
import Socials from './Socials';
import FooterInfo from './FooterInfo';
import FooterGreeting from './FooterGreeting';

import { footer_info, footer_menu, info_text, social_info } from './info';

interface AppFooterProps {
  _?: any;
}

const AppFooter: FC<AppFooterProps> = () => {
  const FooterMenuWithRoute = withRoute(FooterMenu);
  const FooterInfoWithRoute = withRoute(FooterInfo);

  return (
    <div className="py-14 px-space bg-[#303740] text-white">
      <div className="flex items-start justify-between mb-24">
        <FooterMenuWithRoute contents={footer_menu} />
        <Socials contents={social_info} />
      </div>

      <div className="flex items-baseline justify-between ">
        <FooterInfoWithRoute contents={footer_info} />
        <FooterGreeting contents={info_text} />
      </div>
    </div>
  );
};

export default AppFooter;
