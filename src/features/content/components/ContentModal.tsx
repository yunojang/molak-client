import { Modal } from '@/components/Modal';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ContentModalProps {
  _?: never;
}

const ContentModal: FC<ContentModalProps> = () => {
  const navigate = useNavigate();

  return (
    <Modal close={() => navigate(-1)} isOpen>
      <div className="bg-white p-10"></div>
    </Modal>
  );
};

export default ContentModal;
