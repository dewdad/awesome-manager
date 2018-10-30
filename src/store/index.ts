import Vue from "vue";
import Vuex from "vuex";

import { make } from "vuex-pathify";

import { dbInit } from "@/api/lowdb";
// Modules Activated
import modules from "./modules";
import Base from "./modules/Base";

// Plugins will handle persistence
import plugins from "./plugins";

Vue.use(Vuex);

dbInit();

const state = {
  title: "xing wenju",
  filterKey: "",
  token: {
    netlifyToken: "",
    firebaseToken: "",
  },
  loggedIn: false,
};

const mutations: any = { ...make.mutations(state), ...Base.mutations };

const actions: any = { ...make.actions(state), ...Base.actions };

/**
 * Awesome store created here!
 * modules are all namespaced
 * plugins are automatically triggered
 */
export default new Vuex.Store({
  state,
  plugins,
  modules,
  getters: {
    rootTitle: state => state.title,
  },
  mutations,
  actions,
});
