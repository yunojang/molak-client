import { FC } from 'react';
import styled from '@emotion/styled';

import { FooterInfoObject } from './info';
import { Divider } from '../Elements/Divider';
import MolakIcon from '../Icon/MolakIcon';
import { BreakPoint } from '@/utils/breakpoint';

interface FooterInfoProps {
  route?: (path?: string) => void;
  contents: FooterInfoObject[];
}

const FooterInfo: FC<FooterInfoProps> = ({ contents, route = () => {} }) => {
  return (
    <InfoContainer>
      <MolakIcon
        icon={{ size: 55, color: 'white' }}
        text={{ size: 90, color: 'white' }}
      />

      <BreakPoint size="md" better="bigger">
        <Divider color="white" vertical />

        {contents.map((content, i) => (
          <InfoContainer key={i}>
            <div onClick={() => route(content.path)} className="cursor-pointer">
              {content.name}
            </div>
            {i !== contents.length - 1 && <Divider color="white" vertical />}
          </InfoContainer>
        ))}
      </BreakPoint>
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
