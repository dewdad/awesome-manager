import { make } from "vuex-pathify";
import Base from "@/store/modules/Base";

import defaultAccount from "@/api/models/Account";

const state: any = {
  name: "account",
  items: [],
  currentItem: defaultAccount,
  filter: {
    search: "",
    sort: "",
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
  mutations,
  actions,
  getters,
};
