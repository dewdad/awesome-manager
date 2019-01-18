/**
 * LocalForage插件使用IndexedDB将vuex状态持久化
 * @example
 * await Model.$fetch() -> load data from IndexedDB
 * await Model.$get(id) -> get data by id from IndexedDB
 * await Model.$create({ title: ""}) -> create data from IndexedDB
 * await Model.$update(id, { title: "localforage"}) -> load data from IndexedDB
 * await Model.$delete(id) -> load data from IndexedDB
 */

import VuexORM, { Database, Query, Model } from "@vuex-orm/core";
import VuexORMLocalForage from "vuex-orm-localforage";
import models from "@/api/models";
import modules from "@/store/modules";

    
/**
 * 在数据库中注册模型和模块
 */
export const registerDatabase = (models: any, modules: any): Database => {
  const database = new Database();
  Object.keys(models).map(key => {
    console.log(`Registering ORM for ${key} model`);
    database.register(models[key], modules[key] || {});
  });
  return database;
};

/**
 * 生成数据库
 */
export const database = registerDatabase(models, modules);

/**
 * 载入LocalForage插件
 */
VuexORM.use(VuexORMLocalForage, { database });

/**
 * 安装localForage ORM databse
 */
const localForagePlugin = VuexORM.install(database);

export default localForagePlugin;
