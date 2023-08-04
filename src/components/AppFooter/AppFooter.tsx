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
  const SocialsWithRoute = withRoute(Socials);
  const FooterInfoWithRoute = withRoute(FooterInfo);
  const FooterGreetingWithRoute = withRoute(FooterGreeting);

  return (
    <div className="py-12 px-space bg-[#303740] text-white">
      <div className="flex items-start justify-between mb-10">
        <FooterMenuWithRoute contents={footer_menu} />
        <SocialsWithRoute contents={social_info} />
      </div>

      <FooterInfoWithRoute contents={footer_info} />
      <FooterGreetingWithRoute contents={info_text} />
    </div>
  );
};

export default AppFooter;
