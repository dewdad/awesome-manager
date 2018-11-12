import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import App from "@/entry/App.awesome.vue";

describe("App Vue Component Testing", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    const $route = {
      meta: {
        public: false,
      },
    };

    localVue.use(Vuetify);

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
    });
  });
});
