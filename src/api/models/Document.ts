import { Model } from "@vuex-orm/core";
import User from "./User";
import Entity from "./Entity";
export default class Document extends Model {
  static entity = "document";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: Model.increment(),
      type: Model.string("XXX"),
      mark: Model.string("XXX"),
      classification: Model.string("XXX"),
      startDate: Model.string("XXX"),
      title: Model.string("XXX"),
      text: Model.string("XXX"),
      fromEntity: Model.belongsTo(Entity, "_id"),
      sendingEntity: Model.belongsTo(Entity, "_id"),
      toEntity: Model.belongsTo(Entity, "_id"),
      copyEntity: Model.belongsTo(Entity, "_id"),
      attachment: Model.string("XXX"),
      tags: Model.string("XXX"),
      author: Model.belongsTo(User, "_id"),
    };
  }
}
