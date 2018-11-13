export default {
  path: "/database",
  name: "Database",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Database/DatabaseManager.vue`).then(m => m.default),
};
