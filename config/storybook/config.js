/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";
import Vue from "vue";
import Vuex from "vuex"; // Vue plugins
import VueRx from "vue-rx"; // Vue plugins

// Import your custom components.
import MyButton from "../../src/components/base/MyButton.vue";

const req = require.context("../../src/stories", true, /.stories.js$/);

// Install Vue plugins.
Vue.use(Vuex);
Vue.use(VueRx);
// Register custom components.
Vue.component("my-button", MyButton);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
