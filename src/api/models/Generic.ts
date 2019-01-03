import { Model, BelongsTo } from "@vuex-orm/core";
import { keys } from "lodash";

export interface IGeneric {
   _id: string;
   name: string;
   : string;
}

export default class Generic extends Model {
  static entity = "generic";

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
      _id: this.increment(),
      name: this.string("name"),
      : this.string(""),
      
    };
  }
}
