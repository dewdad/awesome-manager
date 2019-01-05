const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  configureWebpack: {
    devtool: "source-map",
    // entry: {
    //   // app: ["./src/main.ts"],
    //   app: ["./src/main.play.ts"],
    // },
  },
  chainWebpack: config => {
    // configure vue loader
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // 修改它的选项...
        options.compilerOptions = {
          preserveWhitespace: false,
        };
        return options;
      });
    // config html plugin
    config.plugin("html").tap(args => {
      args[0].template = path.resolve("public/index.html");
      return args;
    });
  },
  pluginOptions: {
    i18n: {
      locale: "cn",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
    storybook: {
      allowedPlugins: ["define"],
    },
  },
};
