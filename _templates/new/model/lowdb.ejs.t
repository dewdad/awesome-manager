---
inject: true
to: src/store/plugins/index.ts
after: lowdb plugins stuff
skip_if: <%= model %> 
---
  lowdbPlugin({ namespace: "<%= h.inflection.singularize(model).toLowerCase() %>" }),