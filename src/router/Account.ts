export default {
  path: "/account",
  name: "Account",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Account/AccountTable.vue`),
};
