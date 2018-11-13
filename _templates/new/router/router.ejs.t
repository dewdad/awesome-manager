---
to: src/router/<%= h.capitalize(h.inflection.singularize(model)) %>.ts
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
  const routeName = modelName + "Table"
  const componentName = h.capitalize(h.inflection.singularize(model)) + "Table.vue"
  const pathName = (h.inflection.singularize(model)).toLowerCase() + "-table"
%>export default {
  path: "/<%= pathName %>",
  name: "<%= modelName %>",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/<%= modelName %>/<%= componentName %>`).then(m => m.default),
};
