import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Entity from "@/api/models/Entity";
import EntitySelect from "./EntitySelect.vue";

// Use localvue
const localVue = createLocalVue();
localVue.use(Vuetify);

// mock store
const store = (global as any).createORMStore([{ model: Entity }], "entities");

describe("@/components/Entity/EntitySelect", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(EntitySelect, {
      localVue,
      store,
    });
  });

  it("exports a valid component", () => {
    expect(EntitySelect).toBeAComponent();
  });

  it("component should have model", () => {
    let { model } = wrapper.vm.$data;
    expect(model._id).toBe(1);
  });
});
