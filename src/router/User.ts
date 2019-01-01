export default {
  path: "/user-table",
  name: "apps/User",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/User/UserTable.vue`),
};
