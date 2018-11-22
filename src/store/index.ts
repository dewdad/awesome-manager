import Vue from "vue";
import Vuex from "vuex";
import { defaultDB } from "@/api/lowdb";
import plugins from "./plugins";

Vue.use(Vuex);

/**
 * Create default fields in lowdb files
 */
defaultDB.dbInit([
  "account", 
  "activity", 
  "address", 
  "contact", 
  "document", 
  "entity",
  "file",
  "item", 
  "location", 
  "mail", 
  "test", 
  "trending",
  "user", 
  "vacation", 
]);

export default new Vuex.Store({
  plugins,
});
