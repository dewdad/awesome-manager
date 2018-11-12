import { Model } from "@vuex-orm/core";
export default class Test extends Model {
  static entity = "Test";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: Model.increment(),
      name: Model.string("xingwenju"),
    };
  }
}