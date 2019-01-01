import { Model, BelongsTo } from "@vuex-orm/core";
import { keys } from "lodash";

export interface IMilitant {
  _id: string;
  name: string;
  admistionDate: string;
  formalizationDate: string;
  registerDate: string;
  transferDate: string;
}

export default class Militant extends Model {
  static entity = "militant";

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
      name: this.string("Li"),
      admisionDate: this.string("admistionDate"),
      formalizationDate: this.string("formalizationDate"),
      registerDate: this.string("registerDate"),
      transferDate: this.string("transferDate"),
    };
  }
}
