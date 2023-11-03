import { FC, useState } from 'react';

import PageLayout from '@/components/Elements/Layout/ProseLayout';
import { PageIntroTitle } from '@/components/Elements/Title';
import FormDataDisplay from '../components/FormDataDisplay';
import ContentForm from '@/features/content/components/form/ContentForm';
import EpisodeForm from '@/features/content/components/form/EpisodeForm';

const AdminLanding: FC = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-5">
        <div>
          <PageIntroTitle
            text="컨텐츠 어드민 유틸"
            description="컨텐츠 입력 변환기"
          />
          <FormDataDisplay FormComponent={ContentForm} />
        </div>
        <div>
          <PageIntroTitle
            text="에피소드 어드민 유틸"
            description="에피소드 입력 변환기"
          />
          <FormDataDisplay FormComponent={EpisodeForm} />
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminLanding;
