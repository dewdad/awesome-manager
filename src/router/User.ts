export default {
  path: "/users/user-table",
  name: "users/user",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/User/UserTable.vue`),
};
