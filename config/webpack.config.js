const fs = require('fs');
const path = require('path');
const paths = require('./paths');

const { env, getClientEnvironment } = require('../config/env');
const isProduction = env.NODE_ENV === 'production';

const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const imageInlineSizeLimit = parseInt(
  env.IMAGE_INLINE_SIZE_LIMIT ?? 10 * 1024, // 10kb
);

const useTailwind = fs.existsSync(
  path.resolve(paths.appDirectory, 'tailwind.config.js'),
);

const cssRegx = /\.css$/;
const cssModuleRegx = /\.module\.css$/;

const getStyleLoaders = () => {
  const loaders = [
    { loader: require.resolve('style-loader') },
    { loader: require.resolve('css-loader') },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: {
          ident: 'postcss',
          config: false,
          plugins: useTailwind ? ['tailwindcss', 'autoprefixer'] : [],
        },
      },
    },
  ];
  return loaders;
};

// console.log('env log', paths.publicUrlOrPath.slice(0, -1));
const clientEnv = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = webpackEnv => {
  const isProduct = webpackEnv === 'production';

  const config = {
    stats: 'errors-warnings',
    mode: isProduct ? 'production' : 'development',
    entry: {
      index: paths.appIndex,
    },
    output: {
      path: path.resolve(paths.appDirectory, 'dist'),
      filename: `[name].bundle${+new Date()}.js`,
      // publicPath: path.resolve(paths.appDirectory, 'public'),
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: paths.appHtml,
      }),
      new EslintPlugin({
        extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
        eslintPath: require.resolve('eslint'),
        context: paths.appPath,
        exclude: ['node_modules', 'dist'],
      }),
      new webpack.DefinePlugin(clientEnv.stringified),
      // 빌드할 때 프로젝트의 파일을 옮기는(복사) 모듈
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(paths.appDirectory, 'public/asset'),
            to: 'asset',
          },
        ],
      }),
    ],
    devtool: isProduct ? false : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: [
            '/.test.[jt]sx?$/',
            path.resolve(paths.appDirectory, './node_modules'),
          ],
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: imageInlineSizeLimit,
            },
          },
        },
        {
          test: cssRegx,
          exclude: cssModuleRegx,
          use: getStyleLoaders(),
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': paths.appPath,
      },
    },
  };

  return config;
};
