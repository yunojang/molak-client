// dotenv config -> set environment
// const paths = require('./paths');

const fs = require('fs');

const isProduction = process.env.NODE_ENV === 'production';
const hasDevEnv = fs.existsSync('.env.dev');

const env_path = isProduction || !hasDevEnv ? '.env' : '.env.dev';

require('dotenv').config({ path: env_path });

const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  BABLE_ENV: process.env.BABEL_ENV ?? process.env.NODE_ENV,
  devServer: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    PROXY: process.env.PROXY,
  },
  app: {
    PRIMARY_COLOR: `#${process.env.APP_PRIMARY_CODE}`,
  },
};

const appExp = /^APP_/i;

function getClientEnvironment(publicUrl) {
  const stringified = {
    'process.env': Object.keys(process.env)
      .filter(key => appExp.test(key))
      .reduce(
        (env, key) => {
          env[key] = JSON.stringify(process.env[key]);
          return env;
        },
        {
          PUBLIC_URL: JSON.stringify(publicUrl),
        },
      ),
  };

  return {
    stringified,
  };
}

module.exports = {
  env,
  getClientEnvironment,
};
