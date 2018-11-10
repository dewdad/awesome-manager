---
to: src/state/modules/<%= h.capitalize(h.inflection.singularize(name)) %>.ts
---
import { make } from "vuex-pathify";
# import sharedGetters from "../shared/getters";
# import sharedMutations from "../shared/mutations";
# import lowdbActions from "../shared/actions.lowdb";
# import ormActions from "../shared/actions.orm";
export const state = {
  name: "<%= h.inflection.camelize(h.inflection.singularize(name)) %>",
  items: [],
  currentItem: {},
  status: "",
  filter: {
    search: "",
    sort: "",
  },
}

export const getters = {
  ...make.getters(state),
  # ...sharedGetters,
}

export const mutations = {
  ...make.muations(state),
  # ...sharedMutations,
}

export const actions = {
  ...make.actions(state),
  # ...lowdbActions,
  # ...ormActions,
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
