---
inject: true
to: src/api/menu.ts
after: header
---
<% const modelName = h.capitalize(h.inflection.singularize(model))
%>  {
    title: "<%= modelName %>",
    name: "<%= modelName %>",
    group: "apps",
    icon: "fas fa-tasks"
  },
