import AppDrawer from "@/components/AppDrawer.vue";
import AppFab from "@/components/AppFab.vue";
import { AppToolbar } from "@/components/AppToolbar.tsx";
import { Evaluation } from "@/components/Evaluation/Evaluation.tsx";
import PageHeader from "@/components/PageHeader.vue";
import ThemeSettings from "@/components/ThemeSettings.vue";
import AppEvents from "@/util/event";
import { VNode } from "vue";
import * as tsx from "vue-tsx-support";
// Customized events and data interface
interface IAppEvents {
  changeItem: (value: String) => void;
  openThemeSettings: () => void;
}

// Component Definition
const App = tsx.componentFactoryOf<IAppEvents>().create({
  name: "App",
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: "",
      color: "",
    },
  }),
  components: {
    Evaluation,
    AppToolbar,
    AppDrawer,
    AppFab,
    PageHeader,
    ThemeSettings,
  },
  created() {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    (window as any).getApp = this;
  },
  methods: {
    changeItem: (value: string) => console.log(value),
    openThemeSettings() {
      console.log("Open Theme Settings");
      this.$vuetify.goTo(0);
      this.rightDrawer = !this.rightDrawer;
      console.log(this.rightDrawer);
    },
  },
  render(): VNode {
    return (
      <div id="appRoot">
        <v-app id="inspire" class="app">
          <app-toolbar class="app--toolbar" />
          <app-drawer class="app--drawer" />
          <v-content>
            <page-header />
            <div class="page-wrapper">
              <router-view />
            </div>
            <v-footer height="auto" class="white pa-3 app--footer">
              <span class="caption">embajadachina.com Design</span>
              <v-spacer />
              <span class="caption mr-1">Official Manager</span>{" "}
              <v-icon color="pink" small>
                favorite
              </v-icon>
            </v-footer>
          </v-content>
          <app-fab />
          <v-btn
            small
            fab
            dark
            falt
            fixed
            top="top"
            right="right"
            class="setting-fab"
            color="red"
            onClick={this.openThemeSettings}
          >
            <v-icon>settings</v-icon>
          </v-btn>
          <v-navigation-drawer class="setting-drawer" temporary right hide-overlay fixed>
            <theme-settings />
          </v-navigation-drawer>
        </v-app>
      </div>
    );
  },
});
export { App };
