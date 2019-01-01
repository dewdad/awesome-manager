export default {
  path: "/resummee",
  name: "apps/Resummee",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Resummee/ResummeeTable.vue`).then(m => m.default),
};
