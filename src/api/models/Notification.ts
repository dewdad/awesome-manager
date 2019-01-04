import { Model, BelongsTo } from "@vuex-orm/core";

export interface INotification {
  _id: string;
  title: string;
  color: string;
  icon: string;
  timeLabel: string;
}

export default class Notification extends Model {
  static entity = "notification";

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
      title: this.string("New message from Michael"),
      color: this.string("light-green"),
      icon: this.string("account_circle"),
      timeLabel: this.string("2 min ago"),
    };
  }
}
