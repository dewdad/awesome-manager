/**
 * Lowdb插件将vuex状态持久化
 * @example
 * await Model.$fetch() -> load data from Lowdb
 * await Model.$get(id) -> get data by id from Lowdb
 * await Model.$create({ title: "lowdb"}) -> create data from Lowdb
 * await Model.$update(id, { title: "lowdb"}) -> load data from Lowdb
 * await Model.$delete(id) -> load data from Lowdb
 */

import VuexORM, { Database } from "@vuex-orm/core";
import VuexORMLowdbPlugin from "vuex-orm-lowdb";
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
VuexORM.use(VuexORMLowdbPlugin, { database, dbPath: "./public/data" });

/**
 * 安装localForage ORM databse
 */
const lowdbPlugin = VuexORM.install(database);

export default lowdbPlugin;
