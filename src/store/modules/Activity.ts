import { make } from "vuex-pathify";
import ormActions from "@/store/shared/actions.orm";
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

const actions: any = { ...make.actions(state), ...ormActions };

const getters: any = { ...make.getters(state), ...sharedGetters };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
