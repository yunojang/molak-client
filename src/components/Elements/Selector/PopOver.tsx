import {
  Button,
  Popover,
  PopoverBody,
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
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      closeOnBlur
    >
      <PopoverTrigger>
        <Button className="p-0 border-0 m-0 bg-transparent">{trigger}</Button>
      </PopoverTrigger>
      <PopoverContent
        // variants={{ exit: {}, enter: {} }}
        width="fit-content"
        rounded={rounded}
        className="focus:border-none z-[99]"
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
