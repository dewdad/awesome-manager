import { Model, BelongsTo } from "@vuex-orm/core";
import { keys } from "lodash";

export interface IResummee {
   _id: string;
   name: string;
   startDate: string;endDate: string;entity: string;role: string;
}

export default class Resummee extends Model {
  static entity = "resummee";

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
      name: this.string("Nodoby"),
      startDate: this.string("startDate"),
      endDate: this.string("endDate"),
      entity: this.string("entity"),
      role: this.string("role"),
      
    };
  }
}
