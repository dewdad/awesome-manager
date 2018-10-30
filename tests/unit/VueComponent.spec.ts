import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import HelloWorld from "@/components/HelloWorld.vue";
import HelloButton from "@/components/HelloButton.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("Vue Component Testing", () => {
  describe("HelloWorld Test", () => {
    it("should render hello world component", () => {
      const msg = "Welcome to Vuetify";
      const wrapper = shallowMount(HelloWorld, {
        localVue,
      });
      expect(wrapper.find("h1").text()).toBe(msg);
    });
  });

  describe("HelloButton Test", () => {
    it("should emit event in hello button", () => {
      const wrapper = shallowMount(HelloButton, {
        localVue,
      });
      wrapper.find("button").trigger("click");
      console.log(wrapper.emitted());
    });
  });
});
