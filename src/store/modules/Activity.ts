import { make } from "vuex-pathify";
import lowdbActions from "@/store/shared/actions.lowdb";
import sharedMutations from "@/store/shared/mutations";
import sharedGetters from "@/store/shared/getters";

import defaultActivity from "@/api/models/Activity";

const state: any = {
  name: "activity",
  items: [],
  currentItem: defaultActivity,
  filter: {
    search: "",
    sort: "",
  },
};

const mutations: any = {
  ...make.mutations(state),
  ...sharedMutations,
};

const actions: any = { ...make.actions(state), ...lowdbActions };

const getters: any = { ...make.getters(state), ...sharedGetters };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
