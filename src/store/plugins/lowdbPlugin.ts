import { defaultDB } from "@/api/lowdb";

export default options => {
  return store => {
    // Load data from lowdb persistence as array
    let data = defaultDB.all(options.namespace);
    console.log(data);
    store.dispatch(
      "entities/insert",
      {
        entity: options.namespace, data
      },
    );

    // Subscriptions
    store.subscribeAction((action, state) => {
      let { entity, data, where } = action.payload;
      // Only persist data for current namespace
      if (entity !== options.namespace) return;
      // FIXME payload lacks _id as increment value, lifecycle issue
      if (action.type === "entities/insert") {
        console.log("Executing entities/insert...")
        console.log(action.type);
        console.log(action.payload);
        // defaultDB.insert(entity, data);
      }
      if (action.type === "entities/delete") {
        console.log("Executing entities/delete...")
        console.log(action.type);
        console.log(action.payload);
        // defaultDB.delete(entity, { _id: where.toString() });
      }
      if (action.type === "entities/update") {
        console.log("Executing entities/update...")
        console.log(action.type);
        console.log(action.payload);
        // defaultDB.update(entity, { _id: where.toString() }, data);
      }
    });
  };
};
