import VWidget from "@/components/VWidget.vue";
import Menus from "@/pages/layout/Menus.vue";

function mountLayout(component) {
  return (global as any).shallowMountView(component, {
    ...(global as any).createComponentMocks({}),
    mocks: {
      handleClick: jest.fn(),
    },
  });
}

describe("@/pages/layout/Menus.vue", () => {
  beforeEach(() => {});
  describe("layout menus Test", () => {
    it("should render menus", () => {
      expect(Menus).toBeAComponent();
      expect(VWidget).toBeAComponent();
    });
    it("should render menus", () => {
      const wrapper = mountLayout(Menus);
      expect(wrapper.vm.items).not.toBeUndefined();
      expect(wrapper.vm.nudge.top).toBe(0);
      expect(wrapper.find("h4")).not.toBeUndefined();
    });
  });
});
