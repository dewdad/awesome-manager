import { Model } from "@vuex-orm/core";
export default class Location extends Model {
  static entity = "Location";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      latitude: this.string("none"),
      longitude: this.string("longitude")
    };
  }
}
