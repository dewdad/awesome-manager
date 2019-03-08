---
to: src/store/modules/<%= h.capitalize(h.inflection.singularize(name)) %>.ts
---
<%
const stateName = h.inflection.camelize(h.inflection.singularize(name))
%>import { make } from "vuex-pathify";
export const state = {
  name: "<%= stateName %>",
  items: [],
  cached: [],
  currentItem: {},
  loggedIn: false,
  filter: {
    search: "",
    sort: "",
  },
  token: {
    secret: "daniel",
    simpleToken: "",
  },
}

export const getters = {
  ...make.getters(state),
}

export const mutations = {
  ...make.mutations(state),
}

export const actions = {
  ...make.actions(state),
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
