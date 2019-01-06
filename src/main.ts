import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./entry/App.awesome.vue";
// import { App } from "./entry/App.play";
// Register service worker
import "./sw";
// Register global components
import "./components/_global";
import "./components/_widgets";
// Register internationalization
import i18n from "./plugins/i18n";
import "./plugins/rx";
// Register styles
import "./plugins/styles";
import "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount("#app");
