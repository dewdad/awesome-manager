import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
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
      <v-toolbar color="primary" fixed dark app>
        <v-toolbar-title class="ml-0 pl-3">
          <v-toolbar-side-icon onClick={this.handleDrawerToggle} />
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          prepend-icon="search"
          label="Search"
          class="hidden-sm-and-down"
        />
        <v-spacer />

        <v-btn icon href="mailto:linuxing3@qq.com">
          <v-icon>email</v-icon>
        </v-btn>

        <v-btn icon href="https://github.com/linuxing3/official-manager">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
      </v-toolbar>
    );
  },
});
export { AppToolbar };
