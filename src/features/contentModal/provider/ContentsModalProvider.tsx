import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useCoverNavigate } from '../hooks/useCoverNavigate';
import { LayoutProps } from '@/types';

import { Modal } from '@/components/Modal';
import ContentModalLayout from '../components/Elements/ContentModalLayout';
import { ContentIdContext } from '../store/ContentIdContext';

const ContentModalProvider: FC<LayoutProps> = ({ children }) => {
  const { id, episodeId } = useParams();
  if (!id) throw new Error('[dev] route error, id is required');

  const { coverClose } = useCoverNavigate();

  return (
    <Modal isOpen close={coverClose} overflowY="scroll">
      <ContentModalLayout>
        <ContentIdContext.Provider value={{ contentId: id, episodeId }}>
          {children}
        </ContentIdContext.Provider>
      </ContentModalLayout>
    </Modal>
  );
};

export default ContentModalProvider;
