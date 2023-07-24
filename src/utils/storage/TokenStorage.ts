import { Storage } from './Storage';

class TokenStorage extends Storage {
  constructor() {
    super('token');
  }
}

const tokenStorage = new TokenStorage();

export const setToken = (token: string) => {
  tokenStorage.item = token;
};

export const getToken = (): string | null => {
  if (!Storage.existStorage(tokenStorage.key)) {
    return null;
  }

  return tokenStorage.item;
};

export const clearToken = () => {
  tokenStorage.clear();
};
