import React, { FC, ReactElement, ReactNode } from 'react';

import { useDisclosure } from '@/hooks/common/useClosure';
import { Button, Popup } from '@wizrnd/nx-ui';

export interface PopupWindowProps {
  triggerButton: ReactElement;
  title: string;
  description?: string;
  submitButton: ReactElement;
  onCancel?(): void;
}

export const PopupWindow: FC<PopupWindowProps> = ({
  triggerButton,
  title,
  description,
  submitButton,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCancel = () => {},
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure(false);
  return (
    <>
      {React.cloneElement(triggerButton, { onClick: onOpen })}
      <Popup onClose={onClose} onOk={onOpen} open={isOpen}>
        <Button iconName="XIcon" onClick={onClose} />
        <div className="px-12 py-6 bg-white flex gap-8 items-start rounded-md">
          <div className="flex flex-col">
            <header className="flex justify-between my-2">
              <h3 className="text-xl front-bold">{title}</h3>
              <Button iconName="XIcon" onClick={onClose} />
            </header>
            <main className="flex flex-col gap-12">
              <div className="pr-40">{description}</div>
              <div className="mt-auto ml-auto flex gap-2">
                <Button
                  onClick={() => {
                    onCancel();
                    onClose();
                  }}
                >
                  취소
                </Button>
                {submitButton}
              </div>
            </main>
          </div>
        </div>
      </Popup>
    </>
  );
};
