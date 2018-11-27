import ActivityForm from "./ActivityForm.vue";
// import { createStore } from "@/store/plugins/__tests__/Helpers";
import Activity from "@/api/models/Activity";

const store = (global as any).createORMStore([{ model: Activity }], "entities");
function mountActivityForm() {
  return (global as any).shallowMountView(ActivityForm, {
    ...(global as any).createComponentMocks({
      store,
    }),
    mocks: {
      $t: jest.fn(),
    },
  });
}

describe("@/components/Activity/ActivityInfo.vue", () => {
  beforeEach(() => {});
  describe("Activity Info Test", () => {
    it("should render Activity Info", () => {
      expect(ActivityForm).toBeAComponent();
    });
    it("should render Activity Info with store", () => {
      const { vm } = mountActivityForm();
      expect(vm.fields).not.toBeUndefined();
      expect(vm.editing).toBe(false);
    });
  });
});
