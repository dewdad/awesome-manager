import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

import { VToolbar, VToolbarItems, VToolbarTitle, VTextField, VBtn, VIcon, VSpacer } from "vuetify-tsx";

interface IAppToolbarEvents {
  handleDrawerToggle: () => void;
  getApp: any;
}
const AppToolbar = tsx.componentFactoryOf<IAppToolbarEvents>().create({
  name: "app-toolbar",
  data: () => ({
    items: [
      {
        icon: "settings",
        href: "#",
        title: "个人设置",
        click(e) {
          (window as any).getApp.$emit("APP_ACCOUNTSETTING");
        },
      },
      {
        icon: "fullscreen_exit",
        href: "#",
        title: "登出",
        click(e) {
          (window as any).getApp.$emit("APP_LOGOUT");
        },
      },
    ],
  }),
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
  },
  methods: {
    handleDrawerToggle() {
      (window as any).getApp.$emit("APP_DRAWER_TOGGLED");
    },
  },
  render(): VNode {
    return (
      <VToolbar
        color={"primary"}
        app>
        <VTextField
          flat
          solo-inverted
          prepend-icon={"search"}
          label={"Search"}
          class={"hidden-sm-and-down"}
        />
        <VSpacer />

        <VBtn icon href="mailto:linuxing3@qq.com">
          <VIcon>email</VIcon>
        </VBtn>

        <VBtn icon href="https://github.com/linuxing3/official-manager">
          <VIcon>fab fa-github</VIcon>
        </VBtn>
      </VToolbar>
    );
  },
});
export { AppToolbar };
