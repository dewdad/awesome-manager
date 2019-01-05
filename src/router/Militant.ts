export default {
  path: "/users/militant",
  name: "users/Militant",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Militant/MilitantTable.vue`).then(m => m.default),
};
