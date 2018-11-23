---
inject: true
to: src/api/globals.ts
after: entities
skip_if: <%= model %>
---
  "<%= h.inflection.singularize(model).toLowerCase() %>",
