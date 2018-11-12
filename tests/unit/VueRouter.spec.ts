import { createLocalVue, shallowMount, mount, config } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(Vuetify);

import App from "@/entry/App.simple.vue";
import HelloWorld from "@/components/Layout/HelloWorld.vue";

describe("VueRouter Testing", () => {
  let router;
  beforeEach(() => {
    router = new VueRouter({
      routes: [
        {
          name: "HelloWorld",
          path: "/helloworld",
          component: HelloWorld,
        },
      ],
    });
  });

  describe("vue Router Test", () => {
    describe("Tesing componets loaded with routes", () => {
      it("should render helloworld component", () => {
        // wrapper
        const wrapper = mount(App, { router, localVue });
        router.push("/helloworld");
        expect(wrapper.find(HelloWorld).exists()).toBe(true);
      });
    });
  });
});
