/* eslint-disable */
'use strict';

const paths = require('../config/paths');
const { env } = require('../config/env');
const { webpack } = require('webpack');

process.on('unhandledRejection', err => {
  throw err;
});

const chalk = require('react-dev-utils/chalk');
const {
  createCompiler,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');

const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevserver.config');
const WebpackDevServer = require('webpack-dev-server');

const host = env.devServer.HOST ?? '0.0.0.0';
const port = env.devServer.PORT ?? 5000;

const config = configFactory(env.NODE_ENV ?? 'development');
const protocol = env.HTTPS === 'true' ? 'https' : 'http';
const urls = prepareUrls(protocol, host, port);
// const useTypeScript = fs.existsSync(paths.appTsConfig);
const appName = require(paths.appPackageJson).name;

const compiler = createCompiler({
  appName,
  config,
  urls,
  // useTypeScript,
  webpack,
});

const proxySettings = require(paths.appPackageJson).proxy;
const devServerOptions = {
  ...createDevServerConfig(proxySettings),
  port,
  host,
};

const server = new WebpackDevServer(devServerOptions, compiler);

server.startCallback(() => {
  console.log(chalk.cyan('Starting the development server...\n'));
  openBrowser(urls.localUrlForBrowser);
});
