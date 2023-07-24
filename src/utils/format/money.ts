import { _go } from '../fn/_';
import { same } from '../func';

export const formatMoney = (price: number) => {
  price = parseFloat(Number(price).toFixed(2));

  let prefix = '';
  if (price < 0) {
    prefix = '-';
    price = Math.abs(price);
  }

  let surfix = '';
  if (!Number.isInteger(price) && price.toString().split('.')[1]) {
    surfix += '.' + price.toString().split('.')[1];
    price = Math.floor(price);
  }

  const reverse = price.toString().split('').reverse();

  let step = 0;
  const arr = [];
  for (const v of reverse) {
    arr.push(v);
    if (++step === 3) {
      step = 0;
      arr.push(',');
    }
  }

  const join = arr.reverse().join('');
  const money = same(join[0])(',') ? join.slice(1) : join;
  return prefix + money + surfix;
};
