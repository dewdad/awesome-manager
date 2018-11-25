export default {
  path: "/generic-table",
  name: "Generic",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Generic/GenericTable.vue`),
};
