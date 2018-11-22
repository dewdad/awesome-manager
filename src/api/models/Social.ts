import { Model } from "@vuex-orm/core";
export default class Social extends Model {
  static entity = "social";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      title: this.string("100+"),
      icon: this.string("fab fa-facebook"),
      "sub-title": this.string("Likes"),
      color: this.string("indigo"),
      value: this.number(15),
    };
  }
}
