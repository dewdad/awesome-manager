export default {
  path: "/document-table",
  name: "Document",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Document/DocumentTable.vue`).then(m => m.default),
};
