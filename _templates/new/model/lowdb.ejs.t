---
inject: true
to: src/store/plugins/index.ts
after: ormPlugin
---
  lowdbPlugin({ namespace: "<%= h.inflection.singularize(model).toLowerCase() %>" }),