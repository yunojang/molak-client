export const flatDeep = <T>(list: T[], predicate: (item: T) => any): T[] => {
  return list.reduce<T[]>(
    (acc, v) => [
      ...acc,
      ...(Array.isArray(predicate(v))
        ? [v, ...flatDeep(predicate(v), predicate)]
        : [v]),
    ],
    [],
  );
};
