import { Model } from "@vuex-orm/core";
export default class User extends Model {
  static entity = "User";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      name: this.string("Xing Wenju"),
      etnia: this.string("han"),
      birthday: this.string("1978-09-16"),
      gender: this.string("male"),
    };
  }
}
