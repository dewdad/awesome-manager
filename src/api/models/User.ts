import { Model } from "@vuex-orm/core";
export default class User extends Model {
  static entity = "user";

  static primaryKey = "_id";

  static fields() {
    return {
      _id: Model.increment(),
      name: Model.string("XXX"),
    };
  }
}
