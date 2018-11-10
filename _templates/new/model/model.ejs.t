---
to: src/api/models/<%= h.capitalize(h.inflection.singularize(model)) %>.ts
---
import { Model } from "@vuex-orm/core";
export default class <%= h.capitalize(h.inflection.singularize(model)) %> extends Model {
  static entity = "<%= h.inflection.camelize(h.inflection.singularize(model)) %>";

  static primaryKey = "_id";

  static fields() {
    return {
      _id: Model.increment(),
      name: Model.string(""),
    };
  }
}
