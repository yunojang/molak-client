// dotenv config -> set environment
// const paths = require('./paths');

const fs = require('fs');

const hasAdminEnv = fs.existsSync('.env.admin');
const env_path = hasAdminEnv ? '.env.admin' : '.env';

require('dotenv').config({ path: env_path });

const env = {
  // NODE_ENV: process.env.NODE_ENV ?? 'development',
  //   BABLE_ENV: process.env.BABEL_ENV ?? process.env.NODE_ENV,
  devServer: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    PROXY: process.env.PROXY,
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
