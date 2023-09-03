import { FC } from 'react';
import { genre_order } from '../../constant/order';
import { Selector } from '@/components/Elements/Selector';

interface OrderSelectorProps {
  onChange?(order: string): void;
}

const OrderSelector: FC<OrderSelectorProps> = ({ onChange }) => {
  return (
    <Selector
      options={genre_order}
      deafultValue={genre_order[0].id}
      onChange={opt => onChange?.(opt.id)}
    />
  );
};

export default OrderSelector;
