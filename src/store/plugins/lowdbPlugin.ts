import { LowdbForElectron } from "@/api/lowdb";
import { stateObjectFromArray } from "@/util/transformer";
import { Model } from "@vuex-orm/core";
import models from "@/api/models";
const lowdbPlugin = options => {
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
      NSModel.commit(state => (state.data = stateObjectFromArray(entityArray)));
      // entityArray.map(item => NSModel.insert({data: item}))
    }
    /**
     * Subscription to actions for logging each entity mutation
     * payload before persiste to state
     //  */
    // store.subscribeAction((action, state) => {
    //   let { entity } = action.payload;
    //   if (entity !== entity) return;

    //   if (action.type === "entities/insert") {
    //     console.log(`Insert ${entity} entity`);
    //     console.log(action.type);
    //     console.log(action.payload);
    //   }
    //   if (action.type === "entities/delete") {
    //     console.log(`Delete ${entity} entity`);
    //     console.log(action.type);
    //     console.log(action.payload);
    //   }
    //   if (action.type === "entities/update") {
    //     console.log(`Update ${entity} entity`);
    //     console.log(action.type);
    //     console.log(action.payload);
    //   }
    // });
  };
};

const lowdbPlugins = () => {
  let plugins = [];
  Object.keys(models).forEach(entity => {
    plugins.push(lowdbPlugin({ namespace: entity }));
  });
  return plugins;
};

export default lowdbPlugins;
