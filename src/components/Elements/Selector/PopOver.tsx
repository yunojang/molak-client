import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC } from 'react';

interface SelectorProps {
  trigger: React.ReactNode;
  children?: (close: () => void) => React.ReactNode | React.ReactNode;
  contentWidth?: string;
}

const PopOver: FC<SelectorProps> = ({ trigger, children, contentWidth }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover
      placement="bottom-start"
      onOpen={onOpen}
      isOpen={isOpen}
      onClose={onClose}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        width="fit-content"
        rounded="none"
        _focus={{
          outline: 'none',
          boxShadow: 'none',
          border: 'none',
        }}
      >
        <div style={{ width: contentWidth }}>
          {typeof children === 'function' ? children(onClose) : children}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
