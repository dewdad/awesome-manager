import { Model } from "@vuex-orm/core";
export default class Entity extends Model {
  static entity = "entity";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      name: this.string("CEVE"),
      fullName: this.string("Chinese Embassy in Venezuela"),
      abbr: this.string("CEVE"),
      address: this.string("Mercedez, Baruta"),
      avatar: this.string("mfa"),
    };
  }
}
