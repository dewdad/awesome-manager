/* add entry file */
function addEntry(config) {
  // 修改程序入口文件
  config
    .entry('app')
    .clear()
    .add('./src/main.ts')
    .end();
}

const i18n = {
  locale: 'cn',
  fallbackLocale: 'en',
  localeDir: 'locales',
  enableInSFC: true,
};

const storybook = {
  allowedPlugins: ['define'],
};


/**
 * -----------------------------------------------------------------------------
 * Vue设置
 * -----------------------------------------------------------------------------
 */

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: config => {
    addEntry(config);
  },
  pluginOptions: {
    i18n: i18n,
    storybook: storybook
  },
};