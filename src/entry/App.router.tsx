import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppToolbar } from "@/components/AppToolbar";

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
