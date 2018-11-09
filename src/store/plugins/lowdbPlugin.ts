import { defaultDB } from "@/api/lowdb";
import models from "@/api/models";
export default options => {
  return store => {
    /**
     * Get data from lowdb and use Model to load data
     * Use create to set all file
     */
    const Model = models[options.namespace];
    const data = defaultDB.all(options.namespace);
    Model.create({ data });
    /**
     * Subscription to actions for logging each entity mutation
     * payload before persiste to state
     */
    store.subscribeAction((action, state) => {
      let { entity } = action.payload;
      if (entity !== options.namespace) return;

      if (action.type === "entities/insert") {
        console.log("Executing entities/insert...");
        console.log(action.type);
        console.log(action.payload);
      }
      if (action.type === "entities/delete") {
        console.log("Executing entities/delete...");
        console.log(action.type);
        console.log(action.payload);
      }
      if (action.type === "entities/update") {
        console.log("Executing entities/update...");
        console.log(action.type);
        console.log(action.payload);
      }
    });
  };
};
