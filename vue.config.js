/* eslint-disable */
const path = require('path');

/* add vue hotloader */
function addVueJSXHotLoader(config) {
  config.module
    .rule(/\.(j|t)sx$/)
    .test(/\.(j|t)sx$/)
    .use('vue-jsx-hot-loader')
    .before('babel-loader')
    .loader('vue-jsx-hot-loader');
}

/* add copy plugin */
function addCopyPlugin(config) {
  /* config.plugin('copy') */
  config.plugin('copy').tap(args => {
    return [
      ...args,
      {
        from: path.resolve('./public/template'),
        to: path.resolve('./dist/template'),
        toType: 'dir',
      },
    ];
  });
}

/* add define plugin */
function addDefinePlugin(config) {
  /* config.plugin('define') */
  config.plugin('define').tap(args => {
    args[0]['process.env']['STATIC'] = '"/"';
    return args;
  });
}

/* add module/loader */
function addModule(config) {
  /* config.module.rule('vue') */
  config.module
    .rule('vue')
    .use('vue-loader') // use数组
    .loader('vue-loader') // 选取loader并tap选项
    .tap(options => {
      // 修改它的选项...
      options.compilerOptions = {
        preserveWhitespace: false,
      };
      return options; // 必须返回
    });
}

/* add html plugin */
function addHTMLPlugin(config) {
  /* config.plugin('html') */
  config.plugin('html').tap(args => {
    args[0].template = path.resolve('public/index.html');
    return args;
  });
}

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
    devtool: 'source-map',
    resolve: {
      alias: require('./aliases.config').webpack,
    },
  },
  chainWebpack: config => {
    addEntry(config);
    addModule(config);
    addDefinePlugin(config);
    addHTMLPlugin(config);
    addCopyPlugin(config);
    addVueJSXHotLoader(config);
  },
  pluginOptions: {
    i18n: i18n,
    storybook: storybook,
    electronBuilder: {
      chainWebpackRendererProcess: config => {
        config.plugin('define').tap(args => {
          args[0]['IS_ELECTRON'] = true;
          return args;
        });
      },
      // outputDir: '',
      disableMainProcessTypescript: false,
    },
  },
};