export default {
  path: "/activity-table",
  name: "Activity",
  meta: { breadcrumb: true },
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Activity/ActivityTable.vue`),
};
