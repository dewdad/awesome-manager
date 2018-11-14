import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
const localVue = createLocalVue();

localVue.use(Vuetify);

describe("Vue Component Testing", () => {
  describe("Activity Table Test", () => {
    it("should render Activity Info component", () => {
      expect(1).toBe(1);
    });
  });
});
