import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

import { VToolbar, VToolbarTitle, VTextField, VBtn, VIcon, VSpacer } from "vuetify-tsx";

interface IAppToolbarEvents {
  handleDrawerToggle: () => void;
  goHomeRoute: () => void;
  getApp: any;
};

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
    goHomeRoute() {
      this.$router.push("/");
    },
  },
  render(): VNode {
    return (
      <VToolbar
        color={"primary"}
        app>
        <VBtn icon onClick={() => this.handleDrawerToggle}>
          <VIcon>star</VIcon>
        </VBtn>
        <VToolbarTitle class="ml-0 pl-3">Awesome Management</VToolbarTitle>
        <VTextField
          flat
          solo-inverted
          prepend-icon={"search"}
          label={"Search"}
          class={"hidden-sm-and-down"}
        />
        <VSpacer />

        <VBtn icon onClick={() => this.goHomeRoute}>
          <VIcon>home</VIcon>
        </VBtn>

        <VBtn icon href="mailto:linuxing3@qq.com">
          <VIcon>email</VIcon>
        </VBtn>

        <VBtn icon href="https://github.com/linuxing3/awesome-manager">
          <VIcon>fab fa-github</VIcon>
        </VBtn>
      </VToolbar>
    );
  },
});
export { AppToolbar };
