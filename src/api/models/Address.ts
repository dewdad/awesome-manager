import { Model } from "@vuex-orm/core";
export default class Address extends Model {
  static entity = "Address";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      direction: this.string("none")
    };
  }
}
