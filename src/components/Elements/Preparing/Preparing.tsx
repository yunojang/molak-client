import React, { FC, ReactElement, useCallback } from 'react';

import { toast } from '@wizrnd/nx-ui';

export interface PreparingProps {
  children: ReactElement;
  message?: string;
}

// const WarningToast = ({ message }: { message: string }) => (
//   <div className="px-4 py-2 bg-warning text-white rounded-lg">{message}</div>
// );

export const Preparing: FC<PreparingProps> = ({
  children,
  message = '다음 업데이트를 기다려주세요',
}) => {
  // const toast = useToast();

  // const toastPreparing = useCallback(() => {
  //   toast({
  //     position: 'top-right',
  //     status: 'warning',
  //     title: '준비중입니다!',
  //     description: message,
  //     isClosable: true,
  //     // render: () => <WarningToast message={message} />,
  //   });
  // }, [message, toast]);

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => {
          toast.warning({ message: '준비중입니다', description: message });
        },
      })}
    </>
  );
};
