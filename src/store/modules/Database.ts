import { make } from "vuex-pathify";
import Base from "@/store/modules/Base";

import { collections } from "@/api/globals";

const state: any = {
  name: "database",
  items: [],
  currentItem: {},
  filter: {
    search: "",
    sort: "",
  },
  export: {
    docPath: "",
    dataPath: "",
  },
};

const mutations: any = {
  ...make.mutations(state),
  ...Base.mutations,
};

const actions: any = { ...make.actions(state), ...Base.actions };

const getters: any = { ...make.getters(state), ...Base.getters };

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
