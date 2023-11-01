import { FC } from 'react';

import { useText } from '@/hooks/responsive/usePadding';

import PageLayout from '@/components/Elements/Layout/ProseLayout';
import { PageIntroTitle } from '@/components/Elements/Title';

interface AboutProps {
  _?: any;
}

const AboutPage: FC<AboutProps> = () => {
  const { lg } = useText();
  return (
    <PageLayout>
      <PageIntroTitle text="모락 소개" description="K-웹드라마 OTT" />

      <div className={lg.className}>
        <div>모락은 크리에이터의 권리를 가장 중요시합니다. </div>
        <div>
          저희 컨텐츠로 인해 어려움을 겪는 크리에이터가 있다면 언제든지
          문의해주세요.
        </div>
        <div>
          소중한 컨텐츠를 제작해주시는 모든 웹드라마 크리에이터분들께
          감사드립니다.
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
