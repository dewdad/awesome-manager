import { LowdbForElectron } from "@/api/lowdb";
import { keyBy } from "lodash";
import { Model } from "@vuex-orm/core";
import models from "@/api/models";

export const lowdbPlugin = options => {
  const entity = options.namespace || "data";
  return store => {
    /**
     * Load the data from lowdb and commit to initial State
     */
    const DB: LowdbForElectron = new LowdbForElectron(entity);
    const entityArray: any[] = DB.all(entity);
    const NSModel: Model = models[entity];
    // NOTE https://vuex-orm.github.io/vuex-orm/guide/advanced/interact-with-store-from-model.html#interacting-with-state
    if (Array.isArray(entityArray)) {
      NSModel.commit(state => (state.data = keyBy(entityArray, (o)=> o["_id"])));
    }
  };
};

export const genLowdbPlugins = () => {
  let plugins = [];
  Object.keys(models).forEach(entity => {
    plugins.push(lowdbPlugin({ namespace: entity }));
  });
  return plugins;
};

