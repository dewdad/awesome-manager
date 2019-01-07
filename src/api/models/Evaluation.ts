import { Model, BelongsTo } from "@vuex-orm/core";
import { keys } from "lodash";

export interface IEvaluation {
  _id: string;
  name: string;
  description: string;
  year: string;
  date: string;
  level: string;
  proposal: string;
  chief: string;
}

export default class Evaluation extends Model {
  static entity = "evaluation";

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
      name: this.string("secretary"),
      description: this.string("A awesome manager"),
      year: this.string("2019"),
      date: this.string("2019-1-1"),
      level: this.string("Good"),
      proposal: this.string("Promotion"),
      chief: this.string("chief"),
    };
  }
}
