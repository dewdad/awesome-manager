import Vue from "vue";
import Vuex from "vuex";
import VuexORM, { Database } from "@vuex-orm/core";

Vue.use(Vuex);

/**
 * Create a new Vuex Store.
 */
(global as any).createORMStore = (entities, namespace = "entities") => {
  const database = new Database();

  entities.forEach(entity => {
    database.register(entity.model, entity.module || {});
  });

  return new Vuex.Store({
    plugins: [VuexORM.install(database, { namespace })],
    strict: true,
  });
};
