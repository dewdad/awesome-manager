import { Model, BelongsTo } from "@vuex-orm/core";
import { keys, pullAll } from "lodash";

export class BaseModel extends Model {

  static primaryKey = "_id";

  static fieldsKeys(): string[] {
    return keys(this.fields());
  }

  static relationFields(): string[] {
    /**
     * fields that has relations
     * return {Array} fields which value are BelongsTo
     */
    return this.fieldsKeys().reduce((list, field) => {
      if (this.fields()[field] instanceof BelongsTo) {
        list.push(`${field}_id`);
        list.push(field);
      }
      return list;
    }, []);
  }

  static nonRelationFields(): string[] {
    /**
     * fields that has no relations
     * return {Array} fields which value are not BelongsTo
     */
    return pullAll(this.fieldsKeys(), this.relationFields());
  }

  // 关系型数据键值中包括_id的
  static  relationFieldsWithId(): string[] {
      return this.relationFields().filter(r => r.match(/.*_id/));
    }
  // 关系型数据键值中不包括_id的
  static nonRelationFieldsNoId(): string[] {
    return this.relationFields().filter(r => !r.match(/.*_id/));
  }

}
