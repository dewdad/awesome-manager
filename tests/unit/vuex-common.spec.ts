import { shallowMount, config } from "@vue/test-utils";
import mutations from "@/store/shared/mutations";

const ActivityComponent = {
  template: `<button @click="$store.commit('CREATE_ITEM', {})"></button>`,
};

const mockMutations = {
  CREATE_ITEM: jest.fn((state, payload) => mutations.CREATE_ITEM(state, payload)),
  UPDATE_ITEM: jest.fn((state, payload) => mutations.UPDATE_ITEM(state, payload)),
};

const { store, localVue } = (global as any).createVuexModule(
  {
    state: {
      currentItem: {},
      items: [],
    },
  },
  {
    mutations: {
      ...mockMutations,
    },
  },
);

describe("Vuex Testing", () => {
  describe("vuex", () => {
    describe("modules", () => {
      it("should commit mutation create", () => {
        store.commit("CREATE_ITEM", {
          id: 1,
          name: "xingwenju",
        });
        expect(mockMutations.CREATE_ITEM).toHaveBeenCalled();
        expect(store.state["items"].length).toBe(1);
        expect(store.state["items"][0].name).toBe("xingwenju");
      });
      it("should commit mutation update", () => {
        store.commit("UPDATE_ITEM", {});
        expect(mockMutations.UPDATE_ITEM).toHaveBeenCalled();
      });
    });
    describe("modules called from component", () => {
      it("should commit create mutations from component", () => {
        // wrapper
        const wrapper = shallowMount(ActivityComponent, { store, localVue });
        const input = wrapper.find("button");
        input.trigger("click");
        expect(mockMutations.CREATE_ITEM).toHaveBeenCalled();
      });
      it("should commit update mutations from component", () => {
        // wrapper
        const wrapper = shallowMount(ActivityComponent, { store, localVue });
        const input = wrapper.find("button");
        input.trigger("click");
        expect(mockMutations.UPDATE_ITEM).toHaveBeenCalled();
      });
    });
  });
});
