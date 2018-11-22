import { Model } from "@vuex-orm/core";
export default class Entity extends Model {
  static entity = "Entity";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: Model.increment(),
      name: Model.string("CEVE"),
      fullName: Model.string("Chinese Embassy in Venezuela"),
      abbr: Model.string("CEVE"),
      address: Model.string("Mercedez, Baruta"),
      avatar: Model.string("mfa"),
    };
  }
}
