import Vue from "vue";
import { VueRouter } from "vue-router/types/router";
import { Store } from "vuex";
import VueI18n from "vue-i18n";
import router from "../../router";
import store from "../../store";
import i18n from "../../plugins/i18n";
import App from "./App.awesome.vue";

export interface IApp {
  app: Vue;
  router: VueRouter;
  store: Store<any>;
  i18n: VueI18n;
}

export const createApp = (): IApp => {
  const app: Vue = new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
  });

  return { app, router, store, i18n };
};
