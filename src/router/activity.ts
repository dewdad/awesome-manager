export default {
  path: "/activity",
  name: "Activity",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Activity/ActivityTable.vue`).then(m => m.default),
};
