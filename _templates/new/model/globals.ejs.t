---
inject: true
to: src/api/globals.ts
after: collections
skip_if: <%= model %>
---
  "<%= h.inflection.singularize(model).toLowerCase() %>",