import Vue from "vue";

import { App } from "./entry/App.play";

Vue.config.productionTip = false;

new Vue({
  // router,
  // store,
  // i18n,
  render: h => h(App),
}).$mount("#app");
