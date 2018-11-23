import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./entry/App.awesome.vue";
// Register service worker
import "./registerServiceWorker";
// Register global components
import "./components/_globals";
import "./components/_widgets";
// Register internationalization
import i18n from "./plugins/i18n";
// Register styles
import "./plugins/vuetify";
import "./plugins/styles";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount("#app");
