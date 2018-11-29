---
to: src/api/models/<%= h.capitalize(h.inflection.singularize(model)) %>.ts
---
<%
const ModelName = h.capitalize(h.inflection.singularize(model))
const EntityName = h.inflection.singularize(model).toLowerCase()
%>import { Model, BelongsTo } from "@vuex-orm/core";

export interface I<%= ModelName %> {
   _id: string;
   <%= fieldName %>: <%= fieldType %>;
   <% fieldNames.split(",").map(field => { %><%= field %>: string;
   <% }) %>
}

export default class <%= ModelName %> extends Model {
  static entity = "<%= EntityName %>";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static relationFieldsList() {
    return this.fieldsList().reduce((list, field) => {
      if (this.fields()[field] instanceof BelongsTo) list.push(`${field}_id`);
      return list
    },[])
  }

  static fields() {
    return {
      _id: this.increment(),
      <%= fieldName %>: this.<%= fieldType %>("<%= fieldValue %>"),
      <% fieldNames.split(",").map(field => { %><%= field %>: this.string("<%= field %>"),
      <% }) %>
    };
  }
}
