import { FC } from 'react';
import { cx } from '@emotion/css';

import { clickableButtonStyle } from '@/utils/style/button';
import { PiSlidersHorizontalBold } from 'react-icons/pi';

interface FilterButtonProps {
  isOpen?: boolean;
  isActive?: boolean;
  onClick?(): void;
}

const FilterButton: FC<FilterButtonProps> = ({ isOpen, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        clickableButtonStyle,
        isOpen
          ? 'bg-gray-700 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700',
        `w-[3em] h-[3em] rounded-full  inline-flex items-center justify-center relative`,
      )}
    >
      <PiSlidersHorizontalBold size={24} />
      {isActive && (
        <div className="border-2 border-white bg-gray-700 w-3 h-3 rounded-full absolute top-0.5 right-0.5" />
      )}
    </div>
  );
};

export default FilterButton;
