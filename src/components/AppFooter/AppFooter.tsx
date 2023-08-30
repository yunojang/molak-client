import { FC } from 'react';

import { withRoute } from '../Wrapper/withRouter';

import FooterMenu from './FooterMenu';
import Socials from './Socials';
import FooterInfo from './FooterInfo';
import FooterGreeting from './FooterGreeting';

import { footer_info, footer_menu, info_text, social_info } from './info';
import FooterContainerRow from './Layout/FooterContainerRow';
import FooterContainer from './Layout/FooterContainer';

interface AppFooterProps {
  _?: any;
}

const AppFooter: FC<AppFooterProps> = () => {
  const FooterMenuWithRoute = withRoute(FooterMenu);
  const FooterInfoWithRoute = withRoute(FooterInfo);

  return (
    <FooterContainer>
      <FooterContainerRow>
        <FooterMenuWithRoute contents={footer_menu} />
        <Socials contents={social_info} />
      </FooterContainerRow>

      <FooterContainerRow align="end">
        <FooterInfoWithRoute contents={footer_info} />
        <FooterGreeting contents={info_text} />
      </FooterContainerRow>
    </FooterContainer>
  );
};

export default AppFooter;
