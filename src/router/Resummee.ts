export default {
  path: "/users/resummee",
  name: "users/Resummee",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Resummee/ResummeeTable.vue`).then(m => m.default),
};
