import { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useCoverNavigate } from '../hooks/useCoverNavigate';
import { LayoutProps } from '@/types';

import { Modal } from '@/components/Modal';
import ContentModalLayout from '../components/Elements/ContentModalLayout';
import { ContentInfoContext } from '../store/ContentIdContext';

const ContentModalProvider: FC<LayoutProps> = ({ children }) => {
  const { id, episodeId } = useParams();
  if (!id) throw new Error('[dev] route error, id is required');

  const { coverClose } = useCoverNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ContentInfoContext.Provider
      value={{
        contentId: id,
        episodeId,
        contentRef,
      }}
    >
      <Modal isOpen close={coverClose} overflowY="scroll" ref={contentRef}>
        <ContentModalLayout>{children}</ContentModalLayout>
      </Modal>
    </ContentInfoContext.Provider>
  );
};

export default ContentModalProvider;
