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
      "sub-title": this.string("Likes"),
      caption: this.string("Facebook"),
      icon: this.string("fab fa-facebook"),
      color: this.string("indigo"),
      value: this.number(15),
    };
  }
}
