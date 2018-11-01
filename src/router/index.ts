/* eslint-disable */
import Vue from "vue";
import Router, { RouteConfig } from "vue-router";

import path from "./path.awesome";

Vue.use(Router);

/**
 * Dynamic module routes
 * NOTE: require.context is availabe after intalled `webpack-env`
 * and in `tsconfig.json`, must set `types: ['webpack-env']`
 */
let files = require.context(".", false, /\.ts$/);

files.keys().forEach(key => {
  if (key === "./index.ts" || key === "./path.awesome.ts") return;
  path.push(files(key).default);
});

const router = new Router({
  routes: path as RouteConfig[],
});

// router gards
router.beforeEach((to: any, from: any, next: any) => {
  console.log("Going From " + from.path + " to " + to.path);
  next();
});

router.afterEach((to: any, from: any) => {
  console.log("Arrived " + to.path + " from " + from.path);
});

export default router;
