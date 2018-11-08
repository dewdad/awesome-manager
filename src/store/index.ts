import Vue from "vue";
import Vuex from "vuex";
import { defaultDB } from "@/api/lowdb";
import plugins from "./plugins";

Vue.use(Vuex);
defaultDB.dbInit(["account", "activity", "document"]);

export default new Vuex.Store({
  plugins,
});
