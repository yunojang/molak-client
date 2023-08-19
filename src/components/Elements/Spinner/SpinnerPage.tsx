import { FC } from 'react';

import { Spinner } from './Spinner';

interface SpinnerPageProps {
  _?: any;
}

const SpinnerPage: FC<SpinnerPageProps> = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Spinner size={120} />
    </div>
  );
};

export default SpinnerPage;
