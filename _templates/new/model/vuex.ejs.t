---
inject: true
to: src/store/index.ts
after: dbInit
skip_if: <%= model %> 
---
  "<%= h.inflection.singularize(model).toLowerCase() %>",