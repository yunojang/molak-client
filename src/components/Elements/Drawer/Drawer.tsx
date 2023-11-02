import React, { FC, Suspense } from 'react';

import { OpenableProps } from '@/types/open';
import {
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { useDisclosure } from '@/hooks/common/useClosure';
import { Spinner } from '../Spinner';

interface DrawerProps extends OpenableProps {
  _?: never;
}

const Drawer: FC<DrawerProps> = ({ trigger, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={ref} onClick={onOpen}>
        {trigger}
      </div>

      <ChakraDrawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={ref}
        variant="solid"
      >
        <DrawerOverlay />
        <DrawerContent className="rounded-t-xl">
          <DrawerCloseButton />
          <Suspense fallback={<Spinner size={75} pad={25} color="#ccc" />}>
            <div className="">{children?.(onClose)}</div>
          </Suspense>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

export default Drawer;
