const path = require('path');

// path設定
exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // config: path.resolve(__dirname, 'config'),
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        // lib: path.resolve(__dirname, 'src/lib'),
        // pages: path.resolve(__dirname, 'src/pages'),
        // templates: path.resolve(__dirname, 'src/templates'),
        // locales: path.resolve(__dirname, 'src/locales'),
      },
    },
  });
};
