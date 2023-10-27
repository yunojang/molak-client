import { FC, HtmlHTMLAttributes, ReactNode } from 'react';

interface ToggleButtonProps
  extends Omit<HtmlHTMLAttributes<HTMLButtonElement>, 'children' | 'onChange'> {
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
  ...rest
}) => {
  return (
    <button {...rest} className={className} onClick={() => onChange?.(!value)}>
      {children?.(value)}
    </button>
  );
};

export default ToggleButton;
