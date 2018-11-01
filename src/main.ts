import Vue from "vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import i18n from "./plugins/i18n";
import "./plugins/vuetify";
import "./plugins/styles";
import App from "./entry/App.awesome.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount("#app");
