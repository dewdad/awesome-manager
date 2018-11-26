export default {
  path: "/component/database",
  name: "Database",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Database/DatabaseManager.vue`),
};
