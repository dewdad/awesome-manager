import ActivityTable from "./ActivityTable.vue";
// import { createStore } from "@/store/plugins/__tests__/Helpers";
import Activity from "@/api/models/Activity";

const store = (global as any).createORMStore([{ model: Activity }], "entities");
function mountLogin() {
  return (global as any).shallowMountView(ActivityTable, {
    ...(global as any).createComponentMocks({
      store,
    }),
  });
}

describe("@/components/Activity/ActivityTable.vue", () => {
  beforeEach(() => {});
  describe("Activity Table Test", () => {
    it("should render Activity Table", () => {
      expect(ActivityTable).toBeAComponent();
    });
    it("should render Activity Table with store", () => {
      const { vm } = mountLogin();
      expect(vm.all).not.toBeUndefined();
      expect(vm.headers).not.toBeUndefined();
      expect(vm.editing).toBe(false);
    });
  });
});
