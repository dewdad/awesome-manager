import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import ActivityInfo from "@/components/Activity/ActivityInfo.vue";
import ActivityTable from "@/components/Activity/ActivityTable.vue";

const localVue = createLocalVue();

localVue.use(Vuetify);

describe("Vue Component Testing", () => {
  describe("Activity Table Test", () => {
    it("should render Activity Info component", () => {
      const wrapper = shallowMount(ActivityTable, {
        localVue,
      });
      expect(wrapper.find(ActivityInfo).exists()).toBe(true);
    });
  });
});
