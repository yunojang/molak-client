import { FC, useState } from 'react';

import { range } from '@/utils/range';
import { GoDotFill } from 'react-icons/go';
import { cx } from '@emotion/css';

interface OrderStepProps {
  length: number;
  defaultOrder?: number;
  value?: number;
  onChange?(v: number): void;
  icon?: React.ReactNode;
}

const OrderStep: FC<OrderStepProps> = ({
  length,
  onChange = () => {},
  defaultOrder,
  value: pv,
  icon = <GoDotFill />,
}) => {
  const [order, setOrder] = useState(pv ?? defaultOrder);
  const v = pv ?? order;

  const handleSelect = (n: number) => {
    setOrder(n);
    onChange(n);
  };

  return (
    <ul className="flex items-center">
      {range(length).map(n => (
        <li
          onClick={() => handleSelect(n)}
          key={n}
          className={cx(
            n === v ? 'opacity-80' : 'opacity-40 hover:opacity-60',
            'text-white cursor-pointer  transition-opacity duration-300',
          )}
        >
          {icon}
        </li>
      ))}
    </ul>
  );
};

export default OrderStep;
