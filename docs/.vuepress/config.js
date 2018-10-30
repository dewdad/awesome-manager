const path = require("path");
module.exports = {
  title: "Emacser & Vimer & Vuer",
  description: "A sturnborn Emacser-Vimer-Vuer development notes",
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: (config, isServer) => {
    config.devServer = {
      proxy: {
        "/.netlify": {
          target: "http://localhost:9000",
          pathRewrite: { "^/.netlify/functions": "" },
        },
      },
    };
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Emacser & Vimer & Vuer",
      description: "Emacser-Vimer-Vuer开发者笔记",
    },
    "/en/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "Emacser & Vimer & Vuer",
      description: "A sturnborn Emacser-Vimer-Vuer development notes",
    },
  },
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "linuxing3/cp-general-management",
    // 当你的文档不是仓库的根目录时需要设置
    docsDir: "docs",
    // 可选的, 默认是  master
    docsBranch: "master",
    // 默认是 true, 设置为 false 来禁用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    locales: {
      "/": {
        selectText: "语言",
        label: "中文",
        editLinkText: "编辑此页",
        nav: require("./nav/ch"),
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
        nav: require("./nav/en"),
      },
    },
  },
  // plugins: {
  //   "@vuepress/i18n-ui": true,
  //   "@vuepress/notification": true,
  // },
  // clientRootMixin: path.resolve(__dirname, "mixin.js"),
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [``, `one`, `two`, `three`, `four`, `five`],
    },
  ];
}
