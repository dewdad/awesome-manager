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
      _id: this.increment(),
      type: this.string("XXX"),
      mark: this.string("XXX"),
      classification: this.string("XXX"),
      startDate: this.string("XXX"),
      title: this.string("XXX"),
      text: this.string("XXX"),
      fromEntity: this.belongsTo(Entity, "entity_id"),
      sendingEntity: this.belongsTo(Entity, "entity_id"),
      toEntity: this.belongsTo(Entity, "entity_id"),
      copyEntity: this.belongsTo(Entity, "entity_id"),
      attachment: this.string("XXX"),
      tags: this.string("XXX"),
      author: this.belongsTo(User, "user_id"),
    };
  }
}
