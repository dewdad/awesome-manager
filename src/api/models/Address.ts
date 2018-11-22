import { Model } from "@vuex-orm/core";
export default class Address extends Model {
  static entity = "address";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      direction: this.string("none"),
      street: this.string("none"),
      suite: this.string("none"),
      area: this.string("none"),
      city: this.string("none"),
      state: this.string("none"),
      country: this.string("none"),
      zipcode: this.string("none"),
    };
  }
}
