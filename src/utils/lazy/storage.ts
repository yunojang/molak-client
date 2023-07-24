import { _go } from '../fn/_';

export const keyByName = (name?: string) => `retry-${name ?? 'lazy'}-refreshed`;

export const hasRefreshed = (name?: string): boolean =>
  !!_go(
    name,
    keyByName,
    key => window.sessionStorage.getItem(key) ?? 'false',
    JSON.parse,
  );

export const setRefreshed = (bool: string) => (name?: string) =>
  _go(name, keyByName, (k: string) => window.sessionStorage.setItem(k, bool));

export const onPass = setRefreshed('false');
export const onRefresh = setRefreshed('true');
