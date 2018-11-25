export default {
  path: "/test-table",
  name: "Test",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Test/TestTable.vue`).then(m => m.default),
};
