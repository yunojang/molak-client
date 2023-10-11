import { ReactNode, forwardRef } from 'react';
import { cx } from '@emotion/css';
import { FiChevronDown } from 'react-icons/fi';

interface SelectOpenBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  display?: string | ReactNode;
}

const SelectOpenBox = forwardRef<HTMLDivElement, SelectOpenBoxProps>(
  ({ isOpen, display, className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={cx(
          className,
          `flex justify-between items-center select-none  w-36 py-3 px-4 cursor-pointer bg-gray-100 rounded-full 
          hover:bg-gray-200 hover:scale-105 transition-transform`,
        )}
      >
        {display}
        <FiChevronDown />
      </div>
    );
  },
);

SelectOpenBox.displayName = 'SelectOpenBox';
export default SelectOpenBox;
