import { Model, BelongsTo } from "@vuex-orm/core";

export interface IMenu {
  _id: string;
  title: string;
  group: string;
  icon: string;
  href: string;
  target: string;
  name: string;
}

export default class Menu extends Model {
  static entity = "menu";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static relationFieldsList() {
    return this.fieldsList().reduce((list, field) => {
      if (this.fields()[field] instanceof BelongsTo) list.push(`${field}_id`);
      return list;
    }, []);
  }

  static fields() {
    return {
      _id: this.increment(),
      title: this.string("title"),
      group: this.string("group"),
      icon: this.string("icon"),
      href: this.string("href"),
      target: this.string("target"),
      name: this.string("name"),
    };
  }
}
