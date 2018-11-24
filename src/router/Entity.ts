export default {
  path: "/entity-table",
  name: "Entity",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Entity/EntityTable.vue`).then(m => m.default),
};
