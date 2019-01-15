const path = require("path");

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: require("./aliases.config").webpack,
    },
  },
  chainWebpack: config => {
    // 修改程序入口文件
    config
      .entry("app")
      .clear()
      .add("./src/main.ts")
      .end();
    /* config.module.rule('vue') */
    config.module
      .rule("vue")
      .use("vue-loader") // use数组
      .loader("vue-loader") // 选取loader并tap选项
      .tap(options => {
        // 修改它的选项...
        options.compilerOptions = {
          preserveWhitespace: false,
        };
        return options; // 必须返回
      });
    /* config.plugin('html') */
    config.plugin("html").tap(args => {
      args[0].template = path.resolve("public/index.html");
      return args;
    });
    /* config.plugin('define') */
    config.plugin("define").tap(args => {
      args[0]["process.env"]["STATIC"] = "/";
      return args;
    });
    /* config.plugin('copy') */
    config.plugin("copy").tap(args => {
      return [
        ...args,
        {
          from: path.resolve("./public/template"),
          to: path.resolve("./dist/template"),
          toType: "dir",
        },
      ];
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
    electronBuilder: {
      chainWebpackRendererProcess: config => {
        config.plugin("define").tap(args => {
          args[0]["IS_ELECTRON"] = true;
          return args;
        });
      },
      // outputDir: "",
      disableMainProcessTypescript: false,
    },
  },
};
