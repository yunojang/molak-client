import React, { FC } from 'react';

interface BottomControlProps {
  children?: React.ReactNode;
}

const BottomControl: FC<BottomControlProps> = ({ children }) => {
  return (
    <div className="sticky bottom-0 left-0 flex justify-end py-5 mt-3 bg-white border-t-2 ">
      {children}
    </div>
  );
};

export default BottomControl;
