---
inject: true
to: src/store/plugins/index.ts
after: lowdb plugins stuff
---
  lowdbPlugin({ namespace: "<%= h.inflection.singularize(model).toLowerCase() %>" }),
