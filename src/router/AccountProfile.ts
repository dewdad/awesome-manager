export default {
  path: "/component/account-profile",
  name: "AccountProfile",
  component: () =>
    import(/* webpackChunkName: "routes" */
    /* webpackMode: "lazy" */
    `@/components/Account/AccountProfile.vue`).then(m => m.default),
};
