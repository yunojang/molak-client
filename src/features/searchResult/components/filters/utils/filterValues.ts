export const extractItem = (item: any) => {
  if (Array.isArray(item)) return item?.[0];
  return item;
};

const isSameItem = (item1: any, item2: any) => {
  const v1 = extractItem(item1);
  const v2 = extractItem(item2);
  return v1 === v2;
};

const isEmptyItme = (item: any) => {
  const v = extractItem(item);
  return v === undefined || v === null || v === '';
};

export const isAllEmptyValues = <T = any>(filter: {
  [key in keyof T]?: any;
}) =>
  Object.entries(filter).reduce(
    // (prev, [k, v]) => prev && isSameItem(defaultValues[k as keyof T], v),
    (prev, [k, v]) => prev && isEmptyItme(v),
    true,
  );
