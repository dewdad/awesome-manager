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
  render(): VNode {
    return (
      <div id="appRoot">
        <VApp>
          <AppToolbar />
          <AppDrawer />
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
