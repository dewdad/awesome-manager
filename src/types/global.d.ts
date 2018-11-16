declare namespace NodeJS {
  interface Global {
    /**
     * index Signiture to skip type check
     */
    [propName: string]: any;
    (mainArg: any, ...args: any): any;
    /**
     * All properties and methods are exposed to global
     */
    // https://vue-test-utils.vuejs.org/api/#mount
    mount: any;
    mount(component: any, options: any): any;
    // https://vue-test-utils.vuejs.org/api/#shallowmount
    shallowMount: any;
    shallowMount(component: any, options: any): any;

    shallowMountView: any;
    shallowMountView(component: any, options: any): any;

    createVuexModule: any;
    createVuexModule(vuexModule: any, options: any): any;

    createVueRouter: any;
    createVueRouter(path: any[]): any;

    createFullComponent: any;
    createFullComponent(vuexModule: any, path: never[], vuexOptions: any, routerOptions: any): any;

    createVuetifyComponent: any;
    createVuetifyComponent(): any;

    /**
     * Create a options while mocking component
     * can be used with `mount` and `shalloMount`
     *
     * @param {Object} mountOptions as {store, router, style, mocks, stubs}
     *
     * 1. Store
     * Converts a `store` option shaped like:
     * store: {
     *   someModuleName: {
     *     state: { ... },
     *     getters: { ... },
     *     actions: { ... },
     *   },
     *   anotherModuleName: {
     *     getters: { ... },
     *   },
     * },
     * to a store instance, with each module namespaced by
     * default, just like in our app.
     * 2. Router
     * If using `router: true`, we'll automatically stub out
     * components from Vue Router.
     */
    createComponentMocks: any;
    createComponentMocks(mountOptions: any): any;

    /**
     * Create a new Vuex Store with ORM plugin.
     * @param {Array<entity>} enties to pull, in format [{ model:..., module?:... }]
     * @param {String} namespace, normally is `entities` to use `state.entities`
     */
    createORMStore(entities: any[], namespace: S): any;
    /**
     * expect is property exposed to global
     */
    expect: jest.Expect;
  }
}

declare namespace jest {
  interface Matchers<R> {
    toBeAComponent(options?: any): R;
    toBeAModel(options?: any): R;
    toBeAViewComponent(options?: any, mockInstance?: any): R;
    toBeAViewComponentUsing(options?: any): R;
    toBeAVuexModule(options?: any, mockInsance?: any): R;
  }
}

declare var CLIENT: boolean;
declare var SERVER: boolean;
declare var TEST: boolean;
declare var DEVELOPMENT: boolean;
declare var PRODUCTION: boolean;

interface Window {
  store: any;
  __INITIAL_STATE__: any;
}

declare var nodeRequire: any;

declare module "marked" {
  const marked: any;
  export = marked;
}
