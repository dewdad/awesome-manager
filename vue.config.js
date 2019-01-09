const path = require("path");

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    // entry: {
    //   // app: ["./src/main.ts"],
    //   app: ["./src/main.play.ts"],
    // },
    resolve: {
      alias: require("./aliases.config").webpack,
    },
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
