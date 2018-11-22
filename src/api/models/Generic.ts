import { Model } from "@vuex-orm/core";
export default class Generic extends Model {
  static entity = "Generic";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      name: this.string("China"),
      value: this.string("value"),
    };
  }
}
