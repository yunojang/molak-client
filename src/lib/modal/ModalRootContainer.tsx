import { useContext } from 'react';
import { ModalContext } from './ModalContext';

const ModalRootContainer = () => {
  const id = useContext(ModalContext);

  return <div id={id} className="absolute left-0 top-0 z-[999]" />;
};

export default ModalRootContainer;
