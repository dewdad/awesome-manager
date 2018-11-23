import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { make } from "vuex-pathify";

// Init Database
import { dbInit } from "@/api/lowdb";
dbInit();

// Modules Activated
import modules from "./modules";

import Base from "./modules/Base";

// Plugins will handle persistence
import plugins from "./plugins";

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
 * Aweeome store created here!
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
