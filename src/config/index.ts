import { getOsEnv } from '@/utils/env';

export const env = {
  app: {
    name: process.env.APP_NAME ?? 'wcm',
    public_url: process.env.PUBLIC_URL ?? '/',
  },
  auth: {
    prefix: getOsEnv('APP_API_AUTH_PREFIX'),
    youtube_key: getOsEnv('APP_YOUTUBE_API_KEY'),
  },
  client: {
    delay: process.env.APP_DELAY ?? 0,
  },
  colors: {
    primary: `#${process.env.APP_PRIMARY_CODE}`,
  },
};
