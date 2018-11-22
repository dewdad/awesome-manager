import { Model } from "@vuex-orm/core";
export default class MonthVisit extends Model {
  static entity = "MonthVisit";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      month: this.string("Jan"),
      inner: this.string("inner"),
      outer: this.string("outer"),
      
    };
  }
}
