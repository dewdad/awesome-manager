import { createLocalVue, shallowMount, config } from "@vue/test-utils";
import Vuex from "vuex";
import mutations from "@/store/modules/Base/mutations";

const localVue = createLocalVue();
localVue.use(Vuex);

const ActivityComponent = {
  template: `<button @click="$store.commit('mutationCreate', {})"></button>`,
};

const mockMutations = {
  mutationCreate: jest.fn((state, payload) => mutations.mutationCreate(state, payload)),
  mutationUpdate: jest.fn((state, payload) => mutations.mutationUpdate(state, payload)),
};

describe("Vuex Testing", () => {
  let mutations;
  let store;
  beforeEach(() => {
    mutations = { ...mockMutations };
    store = new Vuex.Store({
      state: {
        currentItem: {},
        items: [],
      },
      mutations,
    });
  });

  describe("vuex", () => {
    describe("modules", () => {
      it("should commit mutation create", () => {
        store.commit("mutationCreate", {
          id: 1,
          name: "xingwenju",
        });
        expect(mutations.mutationCreate).toHaveBeenCalled();
        expect(store.state.items.length).toBe(1);
        expect(store.state.items[0].name).toBe("xingwenju");
      });
      it("should commit mutation update", () => {
        store.commit("mutationUpdate", {});
        expect(mutations.mutationUpdate).toHaveBeenCalled();
      });
    });
    describe("modules called from component", () => {
      it("should commit create mutations from component", () => {
        // wrapper
        const wrapper = shallowMount(ActivityComponent, { store, localVue });
        const input = wrapper.find("button");
        input.trigger("click");
        expect(mutations.mutationCreate).toHaveBeenCalled();
      });
      it("should commit update mutations from component", () => {
        // wrapper
        const wrapper = shallowMount(ActivityComponent, { store, localVue });
        const input = wrapper.find("button");
        input.trigger("click");
        expect(mutations.mutationUpdate).toHaveBeenCalled();
      });
    });
  });
});
