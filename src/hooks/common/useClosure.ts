import { useCallback, useState } from 'react';

export const useDisclosure = (initail = false) => {
  const [isOpen, setOpen] = useState(initail);

  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen(open => !open), []);

  return { isOpen, onClose, onOpen, toggle };
};
