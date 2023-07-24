const { env } = require('./env');
module.exports = function (proxy) {
  const env_proxy = env.devServer.PROXY;
  proxy = proxy ? proxy : { '/api': env_proxy, '/images': env_proxy };
  return {
    proxy,
    hot: true,
    client: {
      logging: 'warn',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
  };
};
