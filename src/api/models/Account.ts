import { Model, BelongsTo } from "@vuex-orm/core";
import { keys } from "lodash";
export default class Account extends Model {
  static entity = "account";

  static primaryKey = "_id";

  static fieldsList() {
    return keys(this.fields());
  }

  static relationFieldsList() {
    /**
     * fields that has relations
     * return {Array} fields which value are BelongsTo
     */
    return keys(this.fields()).reduce((list, field) => {
      if (this.fields()[field] instanceof BelongsTo) {
        list.push(`${field}_id`);
        list.push(field);
      }
      return list;
    }, []);
  }

  static fields() {
    return {
      _id: Model.increment(),
      name: Model.string("embajadachina"),
      email: Model.string("embajadachina@gmail.com"),
      password: Model.string("embajadachina"),
      hash: Model.string(""),
      role: Model.string(""),
    };
  }
}
