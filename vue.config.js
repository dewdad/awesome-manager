const path = require("path");
module.exports = {
  configureWebpack: {
    entry: {
      app: ["./src/main.ts"],
      // app: ["./src/main.play.ts"],
    },
    devtool: "source-map",
    plugins: [
      new CopyWebpackPlugin({
        from: path.join(__dirname, "public/template"),
        to: path.resolve("~/template"),
        toType: "dir",
      }),
    ],
  },
  chainWebpack: config => {
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
