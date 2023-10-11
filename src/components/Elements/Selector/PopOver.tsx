import {
  Popover,
  PopoverContent,
  PopoverContentProps,
  PopoverProps,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC } from 'react';

interface SelectorProps {
  trigger: React.ReactNode;
  rounded?: PopoverContentProps['rounded'];
  placement?: PopoverProps['placement'];
  children?: (close: () => void) => React.ReactNode | React.ReactNode;
  contentWidth?: string;
}

const PopOver: FC<SelectorProps> = ({
  trigger,
  children,
  rounded = 'lg',
  placement = 'bottom-start',
  contentWidth,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover
      placement={placement}
      onOpen={onOpen}
      isOpen={isOpen}
      onClose={onClose}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        width="fit-content"
        rounded={rounded}
        className="focus:border-none"
        _focus={{
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
        }}
      >
        {typeof children === 'function' ? children(onClose) : children}
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
