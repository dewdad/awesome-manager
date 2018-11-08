import { defaultDB } from "@/api/lowdb";

export default options => {
  return store => {
    store.subscribeAction((action, state) => {
      let { entity, data, where } = action.payload;
      // only persist data for current namespace
      if (entity !== options.namespace) return;

      if (action.type === "entities/insert") {
        console.log(action.type);
        console.log(action.payload);
        defaultDB.insert(entity, data);
      }
      if (action.type === "entities/delete") {
        console.log(action.type);
        console.log(action.payload);
        defaultDB.delete(entity, { _id: where.toString() });
      }
      if (action.type === "entities/update") {
        console.log(action.type);
        console.log(action.payload);
        defaultDB.update(entity, { _id: where.toString() }, data);
      }
    });
  };
};
