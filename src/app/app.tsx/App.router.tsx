/* eslint-disable */
import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppToolbar } from "@/components/AppToolbar.tsx";
import AppDrawer from "@/components/AppDrawer.vue";
import PageHeader from "@/components/PageHeader.vue";
import ThemeSettings from "@/components/ThemeSettings.vue";
import AppFab from "@/components/AppFab.vue";
import AppEvents from "@/util/event";
import {
  VApp,
  VContent,
} from "vuetify-tsx";

const App = component({
  name: "App",
  components: {
    AppDrawer,
    PageHeader,
    ThemeSettings,
    AppFab,
  },
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: "",
      color: "",
    },
  }),
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
    return <div id="appRoot">
        <VApp>
          <AppToolbar />
          <app-drawer />
          <VContent>
            <page-header />
            <div class="page-wrapper">
              <router-view />
            </div>
          </VContent>
          <app-fab />
        </VApp>
      </div>;
  },
});

export default App;
