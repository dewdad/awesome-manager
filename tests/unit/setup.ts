import Vuex, { Store } from "vuex";
import Vuetify from "vuetify";
import VueRouter, { RouteConfig } from "vue-router";

import Vue from "vue";
import fs from "fs";
import path from "path";
// NOTE add plugins in test
// import plugins from "@state/plugins";

// ===
// Utility functions
// ===

// https://vue-test-utils.vuejs.org/
import vueTestUtils, { createLocalVue } from "@vue/test-utils";
// https://lodash.com/
import _, { cloneDeep } from "lodash";
_.mixin({
  pascalCase: _.flow(_.camelCase, _.upperFirst),
});

// ===
// Configure Vue
// ===

// Don't warn about not using the production build of Vue, as
// we care more about the quality of errors than performance
// for tests.
Vue.config.productionTip = false;

// ===
// Register global components
// ===

const globalComponentFiles = fs
  .readdirSync(path.join(__dirname, "../../src/components"))
  .filter(fileName => /^_base-.+\.vue$/.test(fileName));

// for (const fileName of globalComponentFiles) {
//   const componentName = _["pascalCase"](fileName.match(/^_(base-.+)\.vue$/)[1]);
//   const componentConfig = require("../../src/components/" + fileName);
//   Vue.component(componentName, componentConfig.default || componentConfig);
// }

// ===
// Patch all components with a global mixin
// ===

Vue.mixin({
  created() {
    // HACK: Set a fallback for the `$style` until vue-jest
    // includes better support for CSS modules.
    this["$style"] = this["$style"] || {};
  },
});

// ===
// Mock window properties not handled by jsdom
// ===

Object.defineProperty(window, "localStorage", {
  value: (function() {
    let store = {};
    return {
      getItem: function(key) {
        return store[key] || null;
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      },
    };
  })(),
});

// ===
// Global helpers
// ===

// https://vue-test-utils.vuejs.org/api/#mount
global.mount = vueTestUtils.mount;
// Object.defineProperty(global, "mount", vueTestUtils.mount);

// https://vue-test-utils.vuejs.org/api/#shallowmount
global.shallowMount = vueTestUtils.shallowMount;

global.shallowMountView = (Component, options = {}) => {
  return global.shallowMount(Component, {
    ...options,
    stubs: {
      Layout: {
        functional: true,
        render(h, { slots }) {
          return `<div>{slots().default}</div>`;
        },
      },
      ...(options.stubs || {}),
    },
  });
};

global.createComponentMocks = ({ store, router, style, mocks, stubs }) => {
  // Use a local version of Vue, to avoid polluting the global
  // Vue and thereby affecting other tests.
  // https://vue-test-utils.vuejs.org/api/#createlocalvue
  const localVue = vueTestUtils.createLocalVue();
  const returnOptions = { localVue };

  // https://vue-test-utils.vuejs.org/api/options.html#stubs
  returnOptions["stubs"] = stubs || {};
  // https://vue-test-utils.vuejs.org/api/options.html#mocks
  returnOptions["mocks"] = mocks || {};

  // Converts a `store` option shaped like:
  //
  // store: {
  //   someModuleName: {
  //     state: { ... },
  //     getters: { ... },
  //     actions: { ... },
  //   },
  //   anotherModuleName: {
  //     getters: { ... },
  //   },
  // },
  //
  // to a store instance, with each module namespaced by
  // default, just like in our app.
  if (store) {
    localVue.use(Vuex);
    returnOptions["store"] = new Vuex.Store({
      modules: Object.keys(store)
        .map(moduleName => {
          const storeModule = store[moduleName];
          return {
            [moduleName]: {
              state: storeModule.state || {},
              getters: storeModule.getters || {},
              actions: storeModule.actions || {},
              namespaced:
                typeof storeModule.namespaced === "undefined" ? true : storeModule.namespaced,
            },
          };
        })
        .reduce((moduleA, moduleB) => Object.assign({}, moduleA, moduleB), {}),
    });
  }

  // If using `router: true`, we'll automatically stub out
  // components from Vue Router.
  if (router) {
    returnOptions["stubs"]["router-link"] = true;
    returnOptions["stubs"]["router-view"] = true;
  }

  // If a `style` object is provided, mock some styles.
  if (style) {
    returnOptions["mocks"].$style = style;
  }

  return returnOptions;
};

export const createVuexModule = (vuexModule = {}, options = {}) => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store: Store<{}> = new Vuex.Store({
    ...cloneDeep(vuexModule),
    ...options,
  });
  return { store, localVue };
};
global.createVuexModule = createVuexModule;

export const createVuetifyComponent = () => {
  const localVue = createLocalVue();
  localVue.use(Vuetify);
  return localVue;
};
global.createVuetifyComponent = createVuetifyComponent;

export const createVueRouter = (path = []) => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter({ routes: path as RouteConfig[] });
  return { router, localVue };
};
global.createVueRouter = createVueRouter;

export const createFullComponent = (
  vuexModule = {},
  path = [],
  vuexOptions = {},
  routerOptions = {},
) => {
  const localVue = createLocalVue();
  // use plugins
  localVue.use(Vuetify);
  localVue.use(Vuex);
  localVue.use(VueRouter);
  // inject store
  const store: Store<{}> = new Vuex.Store({
    ...cloneDeep(vuexModule),
    ...vuexOptions,
  });
  // inject router
  const router = new VueRouter({
    routes: path as RouteConfig[],
    ...routerOptions,
  });
  return { store, router, localVue };
};
global.createFullComponent = createFullComponent;
