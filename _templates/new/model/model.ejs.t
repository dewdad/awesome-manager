---
to: src/api/models/<%= <%= h.capitalize(h.inflection.singularize(model)) %> %>.js
---
import { Model } from "@vuex-orm/core";
export default class <%= h.inflection.capitalize(h.inflection.singularize(name)) %> extends Model {
  static entity = "<%= <%= h.capitalize(h.inflection.singularize(model)) %> %>";

  static primaryKey = "_id";

  static fields() {
    return {
      _id: this.increment(),
      name: this.string(""),
    };
  }
}
