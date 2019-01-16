import Vue from "vue";

import { App } from "./entry/App.test";
// import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n";
// Register styles
import "./plugins/styles";
import "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  store,
  // router,
  i18n,
  render: h => h(App),
}).$mount("#app");
