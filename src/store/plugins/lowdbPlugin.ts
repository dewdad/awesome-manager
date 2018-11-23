import { defaultDB } from "@/api/lowdb";
import models from "@/api/models";
export default options => {
  return store => {
    /**
     * Load the data from lowdb and commit to initial State
    */
    const data = defaultDB.all(options.namespace);
    const NSModel = models[options.namespace];
    // NOTE https://vuex-orm.github.io/vuex-orm/guide/advanced/interact-with-store-from-model.html#interacting-with-state
    NSModel.commit(state => state.data = data );
    /**
     * Subscription to actions for logging each entity mutation
     * payload before persiste to state
     */
    store.subscribeAction((action, state) => {
      let { entity } = action.payload;
      if (entity !== options.namespace) return;

      if (action.type === "entities/insert") {
        console.log(`Insert ${options.namespace} entity`);
        console.log(action.type);
        console.log(action.payload);
      }
      if (action.type === "entities/delete") {
        console.log(`Delete ${options.namespace} entity`);
        console.log(action.type);
        console.log(action.payload);
      }
      if (action.type === "entities/update") {
        console.log(`Update ${options.namespace} entity`);
        console.log(action.type);
        console.log(action.payload);
      }
    });
  };
};
