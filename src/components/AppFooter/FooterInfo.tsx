import { FC } from 'react';
import styled from '@emotion/styled';

import { FooterInfoObject } from './info';
import { Divider } from '../Elements/Divider';

interface FooterInfoProps {
  route?: (path?: string) => void;
  contents: FooterInfoObject[];
}

const FooterInfo: FC<FooterInfoProps> = ({ contents, route = () => {} }) => {
  return (
    <InfoContainer>
      <img src="/asset/icon_white.png" />

      <Divider color="white" vertical />

      {contents.map((content, i) => (
        <InfoContainer key={i}>
          <div onClick={() => route(content.path)} className="cursor-pointer">
            {content.name}
          </div>
          {i !== contents.length - 1 && <Divider color="white" vertical />}
        </InfoContainer>
      ))}
    </InfoContainer>
  );
};

export default FooterInfo;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 23px;
`;
