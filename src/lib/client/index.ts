import Axios, { AxiosRequestConfig } from 'axios';

import { env } from '@/config';
import { clearToken, getToken } from '@/utils/storage';

const client = Axios.create({});

export const fileClient = Axios.create({});

export interface ErrorResponse {
  message?: string;
  code?: string;
  status?: string;
}

const authIntereceptor = (config: AxiosRequestConfig) => {
  const token = getToken();
  const authorization = `${env.auth.prefix} ${token}`;

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? authorization : undefined,
    },
  };
};

fileClient.interceptors.request.use(authIntereceptor);

client.interceptors.request.use(authIntereceptor);
client.interceptors.response.use(
  res => {
    const { data } = res;

    if (!env.client.delay) return data;

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, +env.client.delay);
    });
  },
  err => {
    const errdata = err.response?.data;
    // const key = errdata.key ?? errdata.errorkey;
    const message = errdata.title ?? errdata.message ?? err.message;
    const code = errdata.errorcode;
    const status = errdata.status ?? err.status;

    // error log
    console.log({ message, code, status });
    const token = getToken();

    if (token && code === 401) {
      console.error({
        message: '만료된 로그인 세션입니다.',
        description: '다시 로그인해 주세요',
      });

      setTimeout(() => {
        clearToken();
        window.location.assign('/');
      }, 1200);

      return Promise.reject<ErrorResponse>({
        message: message ?? '만료된 로그인 세션입니다.',
        code,
        status,
      });
    }

    return Promise.reject<ErrorResponse>({ status, message, code });
  },
);

export default client;
