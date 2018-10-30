export default [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "routes" */
      /* webpackMode: "lazy" */
      `@/components/HelloWorld.vue`),
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: () =>
      import(/* webpackChunkName: "routes" */
      /* webpackMode: "lazy" */
      `@/components/HelloWorld.vue`),
  },
];
