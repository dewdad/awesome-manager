import { Model, BelongsTo, Increment, Boolean, Number, Attr, HasMany, HasOne, MorphOne, MorphMany, MorphTo } from "@vuex-orm/core";
import { keys, pullAll } from "lodash";

export interface Field {
  related?: Model;
  parent?: Model;
  localKey?: string;
  foreignKey?: string;
}

export class BaseModel extends Model {
  static primaryKey = "_id";

  static fieldsKeys(): string[] {
    return keys(this.fields());
  }

  /**
   * 获取所有的关系型字段
   * @returns {Array<string>} all relations of the model
   */
  static relationFields(): string[] {
    /**
     * fields that has relations
     * @returns {Array} fields which value are BelongsTo
     */
    return this.fieldsKeys().reduce((list, field) => {
      // TODO !this.isConnection()
      let fieldAttribute = this.fields()[field];
      if (this.isRelationAndForeignKey(fieldAttribute)) {
        list.push(`${field}_id`);
        list.push(field);
      }
      return list;
    }, []);
  }

  static isRelationAndForeignKey(field: any): boolean {
    return (
      field instanceof BelongsTo || 
      field instanceof HasOne ||
      field instanceof HasMany ||
      field instanceof MorphOne ||
      field instanceof MorphMany
    );
  }
  
  /**
   * 获取所有的关系型字段
   * @returns {Map<string, Field>} all relations of the model
   */
  getRelations(): Map<string, Field> {
    const relations = new Map<string, Field>();

    this.fields.forEach((field: Field, name: string) => {
      if (!this.isFieldAttribute(field)) {
        relations.set(name, field);
      }
    });

    return relations;
  }

  static nonRelationFields(): string[] {
    /**
     * fields that has no relations
     * @returns {Array} fields which value are not BelongsTo
     */
    return pullAll(this.fieldsKeys(), this.relationFields());
  }

  // 关系型数据键值中包括_id的
  static relationFieldsWithId(): string[] {
    return this.relationFields().filter(r => r.match(/.*_id/));
  }
  // 关系型数据键值中不包括_id的
  static nonRelationFieldsNoId(): string[] {
    return this.relationFields().filter(r => !r.match(/.*_id/));
  }

  static count(): number {
    return this.query().count();
  }

  /**
   * 判断某一字段是否为数字型
   *
   * @param {Field | undefined} field
   * @returns {boolean}
   */
  static isFieldNumber(field: Field): boolean {
    if (!field) return false;
    return (
      field instanceof Number || field instanceof Increment
    );
  }

 /**
   * 判断某一字段是否为属性型(即不属于关系型)
   * @param {Field} field
   * @returns {boolean}
   */
  static isFieldAttribute(field: Field): boolean {

    return (
      field instanceof Increment ||
      field instanceof Attr ||
      field instanceof String ||
      field instanceof Number ||
      field instanceof Boolean
    );
  }
  /**
   * 判断某一字段是否为多重连接.
   * @param {Field} field
   * @returns {boolean}
   */
  static isConnection(field: Field): boolean {
    return !(
      field instanceof BelongsTo ||
      field instanceof HasOne ||
      field instanceof MorphTo ||
      field instanceof MorphOne
    );
  }

  /**
   * 如果是belongsTo/hasOne关系的外键, 需要忽略。
   *
   * @param {string} field
   * @returns {boolean}
   */
  skipField(field: string) {

    let shouldSkipField: boolean = false;

    this.getRelations().forEach((relation) => {
      if (
        (relation instanceof BelongsTo ||
          relation instanceof HasOne) &&
        relation.foreignKey === field
      ) {
        shouldSkipField = true;
        return false;
      }
      return true;
    });

    return shouldSkipField;
  }


  /**
   * Returns a record of this model with the given ID.
   * @param {number} id
   * @returns {any}
   */
  getRecordWithId(id: number): any {
    return this
      .query()
      .withAllRecursive()
      .where("id", id)
      .first();
  }

  /**
   * Determines if we should eager load (means: add as a field in the graphql query) a related entity. belongsTo or
   * hasOne related entities are always eager loaded. Others can be added to the `eagerLoad` array of the model.
   *
   * @param {string} fieldName Name of the field
   * @param {Field} field Relation field
   * @param {Model} relatedModel Related model
   * @returns {boolean}
   */
  shouldEagerLoadRelation(fieldName: string, field: Field, relatedModel: Model): boolean {

    if (
      field instanceof HasOne ||
      field instanceof BelongsTo ||
      field instanceof MorphOne
    ) {
      return true;
    }

    const eagerLoadList: Array<String> = this.eagerLoad || [];
    return (
      eagerLoadList.find(n => {
        return n === relatedModel.singularName || n === relatedModel.pluralName || n === fieldName;
      }) !== undefined
    );
  }
}
