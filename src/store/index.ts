import Vue from "vue";
import Vuex from "vuex";
import { defaultDB } from "@/api/lowdb";
import plugins from "./plugins";

Vue.use(Vuex);

/**
 * Create default fields in lowdb files
 */
defaultDB.dbInit(["account", "user", "activity", "document", "trending"]);

export default new Vuex.Store({
  plugins,
});
