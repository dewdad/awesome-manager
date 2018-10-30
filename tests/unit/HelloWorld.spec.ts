import { createLocalVue, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/Playground/HelloWorld.vue";

import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: { msg },
    });
    let header1 = wrapper.find("h1");
    expect(header1.is("h1")).toBe(true);
    expect(header1.text()).toBe(msg);
    expect(header1.html()).toBe(`<h1>${msg}</h1>`);
  });
});
