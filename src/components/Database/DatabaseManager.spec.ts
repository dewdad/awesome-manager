// import DatabaseManager from "./DatabaseManager.vue";
import vueTestUtils, { createLocalVue } from "@vue/test-utils";
import exportMixin from "@/mixins/exportMixin";

function mountDatabaseManager() {
  let DatabaseManager = (global as any).mockComponent;
  return (global as any).shallowMountView(DatabaseManager, {
    mocks: {
      mixins: [exportMixin],
    },
  });
}
describe("@/components/src/Database/DatabaseManager.vue", () => {
  it("Should load export Mixin", () => {
    expect(typeof exportMixin.data).toBe("function");
    expect(typeof exportMixin.computed).toBe("object");
  });
  it("Should load export Mixin", () => {
    const wrapper = mountDatabaseManager();
    expect(wrapper.vm.mixins).toEqual([exportMixin]);
  });
});
