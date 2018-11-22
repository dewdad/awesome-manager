import { Model } from "@vuex-orm/core";
export default class Trending extends Model {
  static entity = "trending";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      subheading: this.string("Sales"),
      headline: this.string("2018-12-31"),
      caption: this.string("Tasks completed"),
      percent: this.number(90),
      icon: this.attr({
          label: "list",
          color: "primary",
      }),
      linear: this.attr({
          value: 90,
          clor: "success",
      }),
    };
  }
}
