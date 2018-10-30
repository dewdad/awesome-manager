export default [
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: () =>
      import(/* webpackChunkName: "routes" */
      /* webpackMode: "lazy" */
      `@/components/HelloWorld.vue`),
  },
];
