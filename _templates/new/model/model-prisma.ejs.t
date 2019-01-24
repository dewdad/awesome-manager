---
to: src/api/prisma/<%= h.capitalize(h.inflection.singularize(model)) %>.prisma
---
<%
const ModelName = h.capitalize(h.inflection.singularize(model))
%>type <%= ModelName %> {
  id: ID! @id
  <%= fieldName %>: <%= h.capitalize(fieldType) %>!
  <% fieldNames.split(",").map(field => { %><%= field %>: String!
  <% }) %>
  withJson: Json! @default(value: { text: "", value: "" })
}
