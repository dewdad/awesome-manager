import Vue from "vue";
import { Route } from "vue-router";
import { createApp, IApp } from "./App.simple";

const { app, router, store, i18n } = createApp();

Vue.config.errorHandler = (error: Error) => {
  console.error(error); // tslint:disable-line
};
router.onReady(() => {
  router.beforeResolve((to: Route, from: Route, next: any) => {
    console.log(from); // tslint:disable-line
    console.log(to); // tslint:disable-line
    console.log(next); // tslint:disable-line
  });
  app.$mount("#app");
});
