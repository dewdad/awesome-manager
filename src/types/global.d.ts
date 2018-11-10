declare namespace NodeJS {
  interface Global {
    createComponentMocks: any;
    mount: any;
    shallowMount: any;
    createVuexModule: any;
    createVueRouter: any;
    createFullComponent: any;
    createVuetifyComponent: any;
    expect: any;
  }
}

declare namespace jest {
  interface Matchers<R> {
    toBeAComponent(options?: any): R;
    toBeAViewComponent(options?: any, mockInstance?: any): R;
    toBeAViewComponentUsing(options?: any): R;
    toBeAVuexModule(options?: any, mockInsance?: any): R;
  }
}
