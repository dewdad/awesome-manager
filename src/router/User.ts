export default {
  path: "/user-table",
  name: "User",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/User/UserTable.vue`).then(m => m.default),
};
