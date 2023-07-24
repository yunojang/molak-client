import { atom } from 'recoil';

export const inputAmountState = atom({
  key: 'inputAmountState',
  default: 0,
});

export const sellingAmountState = atom({
  key: 'sellingAmountState',
  default: 0,
});

export const newRatioState = atom({
  key: 'newRatioState',
  default: 0,
});

export const valueStates = atom({
  key: 'valueStates',
  default: [{}],
});
