import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import App from "@/entry/app.awesome.vue";

import AppDrawer from "@/components/AppDrawer.vue";
import AppToolbar from "@/components/AppToolbar.vue";
import menu from "@/api/menu";

const localVue = createLocalVue();

const $route = {
  meta: {
    public: false,
  },
};

localVue.use(Vuetify);

describe("App Vue Component Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      localVue,
      mocks: {
        $route,
      },
    });
  });

  describe("App Drawer Test", () => {
    it("should render menu in app drawer", () => {
      expect(wrapper.isVueInstance()).toBe(true);
      expect(wrapper.find(AppDrawer).exists()).toBe(true);
      expect(wrapper.find(AppToolbar).exists()).toBe(true);
      expect(wrapper.vm.$data.rightDrawer).toBe(false);
    });
  });

  describe("App openThemeSettings Test", () => {
    it("should emit openThemeSettings directly", () => {
      wrapper.vm.openThemeSettings();
      expect(wrapper.vm.$data.rightDrawer).toEqual(true);
    });
    it("should emit openThemeSettings from button", () => {
      expect(wrapper.vm.$data.rightDrawer).toEqual(false);
      expect(wrapper.find("v-btn").exists()).toBe(false);
    });
  });

  describe("App events Test", () => {
    it("should emit events when created", () => {
      wrapper.vm.$emit("APP_LOGIN_SUCCESS");
      console.log(wrapper.emitted());
      expect(wrapper.emitted("APP_LOGIN_SUCCESS").length).toBeGreaterThan(0);
      expect(wrapper.vm.$data.snackbar.show).toBe(true);
    });
  });
});

describe("AppDrawer Vue Component Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppDrawer, {
      localVue,
      mocks: {
        $route,
      },
    });
  });
  describe("AppDrawer Menut Test", () => {
    it("should desplay menus", () => {
      expect(wrapper.vm.$data.menus).toEqual(menu);
    });
  });
});
