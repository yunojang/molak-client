export function circularRange(value: number, length: number) {
  const remain = value % length;
  const index = ((remain % length) + length) % length;

  return index;
}

export function range(length: number, fn?: (item: any, index: number) => any) {
  return Array.from({ length }, fn ?? ((_, index) => index));
}
