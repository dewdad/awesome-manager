declare namespace NodeJS {
  interface Global {
    /**
     * All methods are exposed to global
     */
    // createComponentMocks: any;
    // mount: any;
    // shallowMount: any;
    // shallowMountView: any;
    // createVuexModule: any;
    // createVueRouter: any;
    // createVuetifyComponent(): any;
    // createFullComponent: any;
    // createVuetifyComponent: any;
    // createComponentMocks: any;
    mount(component: any, options: any): any;
    shallowMount(component: any, options: any): any;
    shallowMountView(component: any, options: any): any;
    createVuexModule(vuexModule: any, options: any): any;
    createVueRouter(path: any[]): any;
    createVuetifyComponent(): any;
    createFullComponent(vuexModule: any, path: never[], vuexOptions: any, routerOptions: any): any;
    createVuetifyComponent(): any;
    createComponentMocks(component: any, options: any): any;
    /**
     * expect is property expose to global
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
