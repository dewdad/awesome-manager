import VuexORM, { Database, Query, Model } from "@vuex-orm/core";
import { defaultDB } from "@/api/lowdb";
import models from "@/api/models";
import modules from "@/store/modules";

/**
 * VuexORM Plugins
 */
const fieldPlugin = {
  install(components, options) {
    /**
     * return array of fields object keys
     */
    components.Model.fieldsList = function() {
      return Object.keys(components.Model.fields());
    };
  },
};

const testPlugin = {
  install(components, options) {
    /**
     * return new entity
     */
    components.Model.testNew = function(): Promise<any> {
      return new Promise((resolve, reject) => {
        components.Model.new()
          .then(entity => resolve(entity))
          .catch(error => reject(error));
      });
    };
    /**
     * return new entity
     */
    //  {} -> { entity: Collection } -> Instance[] -> Model[]
    components.Model.testInsert = function(data): Promise<any> {
      return new Promise((resolve, reject) => {
        components.Model.insert({ data })
          .then(entities => resolve(entities))
          .catch(error => reject(error));
      });
    };
  },
};

const queryPlugin = {
  install(components, options) {
    /**
     * Add instance methods getData
     * Returns all record of the query chain result.
     * return entities.moduleName.data
     * ->
     */
    components.Query.prototype.getData = function(): Promise<any> {
      return new Promise((resolve, reject) => {
        let records = components.Query.records();
        if (records) {
          resolve(records);
        } else {
          reject(new Error("failed"));
        }
      });
    };
  },
};

VuexORM.use(fieldPlugin);
VuexORM.use(queryPlugin);
VuexORM.use(testPlugin);

/**
 * Query hooks
 */

Query.on("afterCreate", model => {
  console.log(model);
  // let { entity, last } = model.query();
  // defaultDB.insert(entity, last);
});

Query.on("afterDelete", model => {
  let { entity, record } = model.query();
  // console.log(model);
  // defaultDB.delete(entity, { _id: record._id });
});

Query.on("afterUpdate", model => {
  let { $entity, $record } = model.query();
  // console.log(model);
  // defaultDB.update($entity, { _id: $record._id }, $record);
});
/**
 * Database register model and modules
 */
const database = new Database();

Object.keys(models).map(key => {
  console.log(key);
  database.register(models[key], modules[key]);
});

/**
 * Register database as Vuex plugin
 */
const ormPlugin = VuexORM.install(database);

export default ormPlugin;
