import { cloneDeep } from "lodash"
import { createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import Vuetify from "vuetify";
import VueRouter, { RouteConfig } from "vue-router";


export const createVuexModule = (vuexModule = {}, options = {}) => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store: Store<{}> = new Vuex.Store({
    ...cloneDeep(vuexModule),
    ...options
  });
  return {store, localVue}
}
export const createVuetifyComponent = () => {
  const localVue = createLocalVue();
  localVue.use(Vuetify);
  return localVue;
}

export const createVueRouter = (path = []) => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter({ routes: path as RouteConfig[] });
  return { router, localVue};
};

export const createFullComponent = (vuexModule = {}, path = [], vuexOptions = {}, routerOptions = {}) => {
  const localVue = createLocalVue();
  // use plugins
  localVue.use(Vuetify);
  localVue.use(Vuex);
  localVue.use(VueRouter);
  // inject store
  const store: Store<{}> = new Vuex.Store({
    ...cloneDeep(vuexModule),
    ...vuexOptions
  });
  // inject router
  const router = new VueRouter({ 
    routes: path as RouteConfig[], 
    ...routerOptions 
  });
  return { store, router, localVue }
};