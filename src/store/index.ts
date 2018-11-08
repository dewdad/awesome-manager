import Vue from "vue";
import Vuex from "vuex";

import { make } from "vuex-pathify";

import { defaultDB } from "@/api/lowdb";
// Modules Activated
import modules from "./modules";
import lowdbActions from "@/store/shared/actions.lowdb";
import sharedMutations from "@/store/shared/mutations";

// Plugins will handle persistence
import plugins from "./plugins";

Vue.use(Vuex);

defaultDB.dbInit(["account"]);

const state = {
  title: "xing wenju",
  filterKey: "",
  token: {
    netlifyToken: "",
    firebaseToken: "",
  },
  loggedIn: false,
};

const mutations: any = { ...make.mutations(state), ...sharedMutations };

const actions: any = { ...make.actions(state), ...lowdbActions };

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
