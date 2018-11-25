export default {
  path: "/user-table",
  name: "User",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/User/UserTable.vue`).then(m => m.default),
};
