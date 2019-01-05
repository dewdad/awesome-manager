export default {
  path: "/users/user-table",
  name: "users/User",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/User/UserTable.vue`),
};
