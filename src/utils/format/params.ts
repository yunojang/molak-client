const formatComma = (arr: string[]) => {
  return arr.join(',');
};

export const formatParams = <T extends object = any>(params: T) => {
  const newParams: any = { ...params };

  for (const key of Object.keys(newParams)) {
    const v = newParams[key];
    if (Array.isArray(v)) newParams[key] = formatComma(v);
  }

  return newParams;
};
