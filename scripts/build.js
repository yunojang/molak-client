/* eslint-disable */
'use strict';

// const paths = require('../config/paths');
const { env } = require('../config/env');

process.on('unhandledRejection', err => {
  throw err;
});

const { webpack } = require('webpack');
const configFactory = require('../config/webpack.config');

const config = configFactory(env.NODE_ENV ?? 'production');
webpack(config, (err, stats) => {
  if (err) {
    console.error(`WebpackConfigError: ${err}`);
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error('Compile ERROR', info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn('Compile WARN', info.warnings);
  }

  console.log('-------------------finally-------------------');

  console.log(
    stats.toString({
      chunks: false,
      colors: true,
    }),
  );
});
