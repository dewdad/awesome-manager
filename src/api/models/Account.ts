import { Model } from "@vuex-orm/core";
export default class Account extends Model {
  static entity = "account";

  static primaryKey = "_id";

  static fields() {
    return {
      _id: Model.increment(),
      name: Model.string("embajadachina"),
      email: Model.string("embajadachina@gmail.com"),
      password: Model.string("embajadachina"),
      hash: Model.string(""),
      role: Model.string(""),
    };
  }
}
