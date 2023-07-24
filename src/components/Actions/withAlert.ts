import { ReactElement, useState } from 'react';
import { Modal } from '../Elements/Modal/Modal';

interface AlertButtonProps {
  onSubmit?(): void;
}

export interface AlertProps {
  title: string;
  description?: string;
  confirmText?: string;
  confirmColor?: string;
}

export const withAlert = (button: ReactElement, alert: AlertProps) => {
  return function Inner({ onSubmit }: AlertButtonProps) {
    const [done, setDone] = useState<boolean>(false);

    const onClose = () => {
      setDone(true);
      setTimeout(() => {
        setDone(false);
      }, 0);
    };

    return (
      <Modal
        widths={['20vw', '30vw', '35vw']}
        done={done}
        triggerButton={button}
        title={alert.title}
        description={alert.description}
        cancelText="취소"
        onCancel={onClose}
        confirmText={alert.confirmText}
        confirmColor={alert.confirmColor}
        onConfirm={onSubmit}
      />
    );
  };
};
