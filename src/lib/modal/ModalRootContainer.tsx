import { useContext } from 'react';
import { ModalContext } from './ModalContext';
import { Portal } from '@/components/Portal';

const ModalRootContainer = () => {
  const id = useContext(ModalContext);
  return (
    <Portal isContainer>
      <div id={id} className="fixed top-0 left-0 z-[999]" />
    </Portal>
  );
};

export default ModalRootContainer;
