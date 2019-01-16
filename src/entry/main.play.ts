import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import store from "../store";
import i18n from "../plugins/i18n";
// Register styles
import Vuetify from "vuetify-tsx";
import "../plugins/styles";
import App from "./App.test";

Vue.use(({
  install: () => Vue.prototype.$vuetify = Vuetify
}));
Vue.use(Router);

const path = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "routes" */
      /* webpackMode: "lazy" */
      `@/components/Evaluation/EvaluationTable`),
  },
];

const router = new Router({
  routes: path as RouteConfig[],
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount("#app");