const path = require('path');
const { override, addWebpackAlias, addLessLoader } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    ['@common']: path.resolve(__dirname, 'src', 'common'),
    ['@modules']: path.resolve(__dirname, 'src', 'modules')
  }),
  addLessLoader({
    javascriptEnabled: true,
    importLoaders: 1
  })
);
