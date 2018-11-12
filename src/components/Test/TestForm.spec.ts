import TestForm from "./TestForm.vue";
import TestInfo from "./TestInfo.vue";

describe("@/components/Test/TestForm", () => {
  it("exports a valid component", () => {
    expect(TestForm).toBeAComponent();
  });
  it("exports a valid component", () => {
    const wrapper = createComponentMocks({});
    expect(TestInfo).toBeAComponent();
  });
});
