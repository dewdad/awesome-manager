module.exports = {
  configureWebpack: {
    devtool: "source-map",
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
