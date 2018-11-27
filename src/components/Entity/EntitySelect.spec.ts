import EntitySelect from "./EntitySelect.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
const localVue = createLocalVue();
localVue.use(Vuetify);

const entities = [
  {
    _id: 1,
    text: "mfa",
  },
];
describe("@/components/Entity/EntitySelect", () => {
  it("exports a valid component", () => {
    expect(EntitySelect).toBeAComponent();
  });
  it("component should have model", () => {
    let wrapper = shallowMount(EntitySelect, {
      localVue,
    });
    let { model } = wrapper.vm.$data;
    expect(model._id).toBe(1);
  });
  it("component should have model", () => {
    let wrapper = shallowMount(EntitySelect, {
      localVue,
      mocks: {
        entities,
      },
      stubs: {
        "v-select": true,
      },
    });
    let selectSource = wrapper.find("v-select").attributes("items");
    expect(selectSource).toEqual(entities);
  });
});
