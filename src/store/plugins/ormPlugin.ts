import VuexORM, { Database, Query, Model } from "@vuex-orm/core";
import { defaultDB } from "@/api/lowdb";
import models from "@/api/models";
import modules from "@/store/modules";

/**
 * Query hooks
 */

Query.on("afterCreate", model => {
  // NOTE https://vuex-orm.github.io/vuex-orm/guide/components/models.html#model-conventions
  // Get class static property with instance method $self
  const entity = model.$self().entity;
  console.log("Create Hook in " + entity);
  defaultDB.insert(entity, model);
});

Query.on("afterDelete", model => {
  const entity = model.$self().entity;
  console.log("Delete Hook in " + entity);
  defaultDB.delete(entity, { _id: model._id });
});

Query.on("afterUpdate", model => {
  const entity = model.$self().entity;
  console.log("Update Hook in " + entity);
  defaultDB.update(entity, { _id: model._id }, model);
});

/**
 * Database register model and modules
 */
const database = new Database();

Object.keys(models).map(key => {
  console.log(`Registering ORM for ${key} model`);
  database.register(models[key], modules[key] || {});
});

/**
 * Register database as Vuex plugin
 */
const ormPlugin = VuexORM.install(database);

export default ormPlugin;
