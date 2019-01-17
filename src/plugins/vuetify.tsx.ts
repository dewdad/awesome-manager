import Vue from "vue";
import { directives, transitions, Vuetify } from "vuetify-tsx";
import "./styles";

// Vuetify
Vue.use(Vuetify, {
  directives,
  components: {
    transitions,
  },
});
