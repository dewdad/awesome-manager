import Vue from "vue";
import Vuex from "vuex";
import { LowdbForElectron } from "@/api/lowdb";
import { entities } from "@/api/globals";
import plugins from "./plugins";

Vue.use(Vuex);

/**
 * Create lowdb files and set default fields
 * @return {Object} entitiesDb, ex: {user: DB}
 */
const pool = entities.reduce((entitiesDb, entity) => {
  const DB = new LowdbForElectron(entity);
  DB.dbCreate(entity);
  entitiesDb[entity] = DB;
  return entitiesDb;
}, Object.create(null));

export default new Vuex.Store({
  state: { pool, entities },
  plugins,
});
