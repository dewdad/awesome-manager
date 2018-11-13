export default {
  path: "/Test-table",
  name: "Test",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Test/TestTable.vue`),
};
