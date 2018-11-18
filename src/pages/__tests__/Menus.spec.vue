import VWidget from "@/components/VWidget";
import Menus from "@/pages/layout/Menus";

describe("@/pages/layout/Menus.vue", () => {
  beforeEach(() => {});
  describe("layout menus Test", () => {
    it("should render menus", () => {
      expect(ActivityInfo).toBeAComponent();
    });
    it("should render Activity Info with store", () => {
      const { vm } = mountActivityInfo();
      expect(vm.fields).not.toBeUndefined();
      expect(vm.editing).toBe(false);
    });
  });
});