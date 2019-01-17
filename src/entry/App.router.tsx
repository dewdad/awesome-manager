/* eslint-disable */
import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppToolbar } from "@/components/AppToolbar.tsx";
import AppDrawer from "@/components/AppDrawer.vue";

import {
  VApp,
  VContent,
} from "vuetify-tsx";

const App = component({
  name: "App",
  components: {
    AppDrawer
  },
  render(): VNode {
    return (
      <div id="appRoot">
        <VApp>
          <AppToolbar />
          <app-drawer />
          <VContent>
            <div class="page-wrapper">
              <router-view />
            </div>
          </VContent>
        </VApp>
      </div>
    );
  },
});

export default App;
