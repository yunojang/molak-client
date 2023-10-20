import { FC, ReactNode } from 'react';

interface ToggleButtonProps {
  value: boolean;
  onChange?(v: boolean): void;
  className?: string;
  // disabled?: boolean;
  children?(v: boolean): ReactNode;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  value,
  className,
  onChange,
  children,
}) => {
  return (
    <button className={className} onClick={() => onChange?.(!value)}>
      {children?.(value)}
    </button>
  );
};

export default ToggleButton;
