import { Model } from "@vuex-orm/core";

export interface IApp {
  _id: string;
  name: string;
  title: string;
  description: string;
}

export default class App extends Model {
  static entity = "app";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      name: this.string("coder"),
      title: this.string("title"),
      description: this.string("description"),
    };
  }
}
