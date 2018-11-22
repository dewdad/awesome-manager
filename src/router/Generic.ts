export default {
  path: "/generic-table",
  name: "Generic",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Generic/GenericTable.vue`).then(m => m.default),
};
