export default {
  path: "/test-table",
  name: "Test",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Test/TestTable.vue`).then(m => m.default),
};
