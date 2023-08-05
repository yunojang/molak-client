import { FC } from 'react';
import { FooterInfoObject } from './info';
import styled from '@emotion/styled';

interface FooterInfoProps {
  route?: (path?: string) => void;
  contents: FooterInfoObject[];
}

const Divider = () => <div className="h-[60%] border-l-[1px] border-white  " />;

const FooterInfo: FC<FooterInfoProps> = ({ contents, route = () => {} }) => {
  return (
    <InfoContainer>
      <img src="/asset/icon_white.png" />

      <Divider />

      {contents.map((content, i) => (
        <InfoContainer key={i}>
          <div onClick={() => route(content.path)} className="cursor-pointer">
            {content.name}
          </div>
          {i !== contents.length - 1 && <Divider />}
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
