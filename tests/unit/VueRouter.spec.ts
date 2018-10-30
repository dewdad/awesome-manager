import { createLocalVue, shallowMount, mount, config } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(Vuetify);

import App from "@/App.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import HelloButton from "@/components/HelloButton.vue";

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
        {
          name: "HelloButton",
          path: "/hellobutton",
          component: HelloButton,
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
