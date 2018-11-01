import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import App from "@/entry/App.awesome.vue";
import AppDrawer from "@/components/AppDrawer";

const localVue = createLocalVue();

localVue.use(Vuetify);

describe("Vue Component Testing", () => {
  describe("Activity Table Test", () => {
    it("should render Activity Info component", () => {
      const wrapper = shallowMount(App, {
        localVue,
      });
      expect(wrapper.find(AppDrawer).exists()).toBe(true);
    });
  });
});
