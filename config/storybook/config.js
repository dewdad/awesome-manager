/* eslint-disable import/no-extraneous-dependencies */

import Vue from "vue";
import Vuetify from "vuetify";
import router from "../../src/router";
import store from "../../src/store";
import "vuetify/src/stylus/app.styl";
Vue.use(Vuetify, {
  iconfont: "fa",
});
import "../../src/plugins/styles";

import { configure } from "@storybook/vue";

const req = require.context("../../src/stories", true, /.stories.(j|t)s$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
