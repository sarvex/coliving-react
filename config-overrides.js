const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        assets: './src/assets',
        components: './src/components',
        views: './src/views',
      },
    },
  ]),
);
