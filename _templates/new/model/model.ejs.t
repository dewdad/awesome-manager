---
to: src/api/models/<%= h.capitalize(h.inflection.singularize(model)) %>.ts
---
import { Model } from "@vuex-orm/core";
export default class <%= h.capitalize(h.inflection.singularize(model)) %> extends Model {
  static entity = "<%= h.inflection.camelize(h.inflection.singularize(model)) %>";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: Model.increment(),
      <%
      if(fields.indexOf("name") !== -1) fields[0]
      %>name: Model.string("xingwenju")
    };
  }
}
