const fs = require('fs');
const path = require('path');

const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL,
);

module.exports = {
  appDirectory,
  appPath: resolveApp('src/'),
  appIndex: resolveApp('src/index.tsx'),
  appPublic: resolveApp('public/'),
  appHtml: resolveApp('public/index.html'),
  appPackageJson: resolveApp('package.json'),
  appTsConfig: resolveApp('tsconfig.json'),
  appBundle: resolveApp('dist/'),
  jestSetup: resolveApp('config/jest.setup.js'),
  // environment: resolveApp('.env'),
  // prodEnv: resolveApp('.env'),
  // devEnv: resolveApp('.env.dev'),
  publicUrlOrPath,
};
