---
inject: true
to: src/api/globals.ts
after: collections
---
  "<%= h.inflection.singularize(model).toLowerCase() %>",