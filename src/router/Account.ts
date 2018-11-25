export default {
  path: "/component/account",
  name: "Account",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Account/AccountTable.vue`).then(m => m.default),
};
