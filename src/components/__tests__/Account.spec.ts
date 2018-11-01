import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import AccountInfo from "@/components/Account/AccountInfo.vue";
import AccountTable from "@/components/Account/AccountTable.vue";

const localVue = createLocalVue();

// FIXME: spread functions not work
localVue.use(Vuetify);

describe("Vue Component Testing", () => {
  describe("Account Table Test", () => {
    it("should render Account Info component", () => {
      const wrapper = shallowMount(AccountTable, {
        localVue,
      });
      expect(wrapper.find(AccountInfo).exists()).toBe(true);
    });
  });
});
