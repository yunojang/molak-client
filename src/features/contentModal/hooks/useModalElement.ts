import { useContext } from 'react';

import { ModalContext } from '@/lib/modal/ModalContext';

export const useModalElement = () => {
  const modalId = useContext(ModalContext);
  if (!modalId)
    throw new Error('[dev] modal id provider 안에서 사용해야합니다');

  const element = document.getElementById(modalId);
  if (!element)
    throw new Error(
      '[dev] modal element가 렌더링 되지 않았거나 렌더링 되기 이전에 사용되었습니다',
    );

  return element;
};
