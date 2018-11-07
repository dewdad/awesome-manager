import { make } from "vuex-pathify";
import lowdbActions from "@/store/shared/actions.orm";
import sharedMutations from "@/store/shared/mutations";
import sharedGetters from "@/store/shared/getters";


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
  ...sharedMutations,
};

const actions: any = { ...make.actions(state), ...lowdbActions };

const getters: any = { ...make.getters(state), ...sharedGetters };

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
