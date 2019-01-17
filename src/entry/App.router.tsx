import { VNode } from "vue";
import { component } from "vue-tsx-support";

import {
  VApp,
  VContent,
} from "vuetify-tsx";

const App = component({
  name: "App",
  data: () => ({
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
  render(): VNode {
    return (
      <VApp>
        <VContent>
          <router-view>
          </router-view>
        </VContent>
      </VApp>
    );
  },
});

export default App;
