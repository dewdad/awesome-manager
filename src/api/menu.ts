const isDevelopment = process.env.NODE_ENV !== "production";

const mainMenu = [
  {
    title: "Generic",
    name: "Generic",
    group: "apps",
    icon: "fas fa-tasks"
  },
  {
    title: "Test",
    name: "Test",
    group: "apps",
    icon: "fas fa-tasks",
  },

  { header: "常用功能" },
  {
    title: "项目任务",
    name: "Projects",
    group: "apps",
    icon: "fas fa-tasks",
  },
  {
    title: "活动登记",
    name: "Activity",
    group: "apps",
    icon: "fas fa-calendar",
  },
  {
    title: "本馆人员",
    name: "Users",
    group: "apps",
    icon: "fas fa-user",
  },
  {
    title: "外部联系人",
    name: "Contacts",
    group: "apps",
    icon: "fas fa-user-friends",
  },
  {
    title: "内部文件收发",
    name: "Documents",
    group: "apps",
    icon: "fas fa-file-export",
  },
  {
    title: "礼宾收文登记",
    name: "Letters",
    group: "apps",
    icon: "fas fa-file-import",
  },
  {
    title: "控制面板",
    group: "apps",
    icon: "fas fa-th",
    name: "Dashboard",
  },
];

const seniorMenu = [
  { header: "高级功能" },
  {
    title: "打开微信",
    group: "senior",
    icon: "fab fa-weixin",
    href: "https://wx.qq.com",
    target: "_blank",
    name: "Weixin",
  },
  {
    title: "Whatsapp",
    group: "senior",
    icon: "fab fa-whatsapp",
    href: "https://web.whatsapp.com/",
    target: "_blank",
    name: "Whatsapp",
  },
  {
    title: "在线文档",
    group: "senior",
    icon: "fas fa-file-word",
    href: "https://docs.qq.com",
    target: "_blank",
    name: "QQDoc",
  },
  {
    title: "部内邮箱",
    group: "senior",
    icon: "fas fa-inbox",
    href: "https://mail.mfa.gov.cn",
    target: "_blank",
    name: "MFAMail",
  },
  {
    title: "国外网银",
    group: "senior",
    icon: "fas fa-money-bill",
    href:
      "https://www.bbvaprovinet.provincial.com/WCPL_VE_WEB/wcpl_ve_web/provinet/BBVAInicioWC.jsp",
    target: "_blank",
    name: "BBVA",
  },
  {
    title: "导入导出",
    group: "hight",
    icon: "fas fa-save",
    name: "Database",
  },
  {
    title: "更多应用",
    group: "senior",
    icon: "fab fa-chrome",
    href: "https://electronjs.org/apps",
    target: "_blank",
    name: "ElectronApp",
  },
];

const extraMenu = [
  { header: "扩展功能" },
  {
    title: "账户信息",
    group: "apps",
    icon: "fas fa-user-edit",
    name: "AccountProfile",
  },
  {
    title: "即时通讯",
    group: "extra",
    icon: "chat_bubble",
    target: "_blank",
    name: "Chat",
  },
  {
    title: "收件箱",
    group: "extra",
    target: "_blank",
    icon: "email",
    name: "Mail",
  },
  {
    title: "媒体管理",
    group: "extra",
    icon: "perm_media",
    name: "Media",
  },
  {
    title: "书签管理",
    group: "extra",
    icon: "perm_media",
    name: "Bookmarks",
  },
];

const sampleMenu = [
  { header: "手册说明" },
  {
    title: "小工具",
    group: "widgets",
    component: "widgets",
    icon: "widgets",
    items: [
      { name: "social", title: "社交账号", component: "components/social" },
      { name: "statistic", title: "统计查询", badge: "new", component: "components/statistic" },
      { name: "chart", title: "图表展示", component: "components/chart" },
      { name: "list", title: "列表清单", component: "components/widget-list" },
      // { name: 'post', title: 'Post', component: 'components/widget-post' },
    ],
  },
  {
    title: "通用",
    group: "components",
    component: "components",
    icon: "tune",
    items: [
      { name: "alerts", title: "Alerts", component: "components/alerts" },
      { name: "avatars", title: "Avatars", component: "components/avatars" },
      { name: "badges", title: "Badges", component: "components/badges" },
      { name: "buttons", title: "Buttons", component: "components/buttons" },
      { name: "cards", title: "Cards", component: "components/cards" },
      { name: "carousels", title: "Carousels", component: "components/carousels" },
      { name: "chips", title: "Chips", component: "components/chips" },
      { name: "dialogs", title: "Dialogs", component: "components/dialogs" },
      { name: "icons", title: "Icons", component: "components/icons" },
      { name: "tables", title: "Data Tables", component: "components/tables" },
      { name: "parallax", title: "Parallax  image", component: "components/parallax" },
      { name: "snackbar", title: "Snackbar", component: "components/snackbar" },
      { name: "progress", title: "Progress", component: "components/progress" },
      { name: "slider", title: "Slider", component: "components/sliders" },
      { name: "tooltip", title: "Tooltip", component: "components/tooltips" },
      { name: "pagination", title: "Pagination", component: "components/paginations" },
      { name: "typography", title: "Typography", component: "components/typography" },
      { name: "color", title: "Color", component: "components/color" },
    ],
  },
  {
    title: "选择器",
    group: "pickers",
    component: "picker",
    icon: "filter_vintage",
    items: [
      { name: "timepicker", title: "Timepicker", component: "pickers/timepicker" },
      { name: "datepicker", title: "Datepicker", component: "pickers/datepicker" },
    ],
  },
  {
    title: "布局",
    group: "layout",
    component: "layout",
    icon: "view_compact",
    items: [
      { name: "bottom-sheets", title: "Bottom panels", component: "components/bottom-sheets" },
      {
        name: "expansion-panels",
        title: "Expansion panels",
        component: "components/expansion-panels",
      },
      { name: "footer", title: "Footer", component: "components/footer" },
      { name: "lists", title: "Lists", component: "components/lists" },
      { name: "jumbotrons", title: "Jumbotrons", badge: "new", component: "components/jumbotrons" },
      { name: "menus", title: "Menus", component: "components/menus" },
      // { name: 'navigation-drawers', title: 'Navigation drawers', component: 'components/navigation-drawers' },
      { name: "tabs", title: "Tabs", component: "components/tabs" },
      { name: "toolbar", title: "Toolbars", component: "components/toolbar" },
      { name: "timeline", title: "Timeline", component: "components/timeline" },
    ],
  },
  {
    title: "表单控件",
    group: "forms",
    component: "forms",
    icon: "edit",
    items: [
      { name: "basic", title: "General", component: "components/basic-forms" },
      { name: "selects", title: "Selects", badge: "new", component: "components/selects" },
      {
        name: "selection-controls",
        title: "Selection Controls",
        component: "components/selection-controls",
      },
      { name: "text-fields", title: "Text Fields", component: "components/text-fields" },
      { name: "steppers", title: "Steppers", component: "components/steppers" },
      { name: "editors", title: "Editors", component: "components/editors" },
    ],
  },
  {
    title: "基本页面",
    group: "extra",
    icon: "list",
    items: [
      { name: "Login", title: "Login", component: "Login" },
      { name: "404", title: "404", component: "NotFound" },
      { name: "403", title: "403", component: "AccessDenied" },
      { name: "500", title: "500", component: "ServerError" },
    ],
  },
];

// In production, only main menu items will be shown

let Menu: any = [];

if (isDevelopment) {
  Menu = [...mainMenu, ...seniorMenu, ...extraMenu, ...sampleMenu];
} else {
  Menu = [...mainMenu, ...seniorMenu];
}

// reorder menu
Menu.forEach((item: any) => {
  if (item.items) {
    item.items.sort((x: any, y: any) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
});

export default Menu;
