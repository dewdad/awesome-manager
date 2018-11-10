import TestModel from "./Test";

describe("@/api/models/Test", () => {
  it("exports a valid Vuex ORM Model", () => {
    let model = new TestModel();
    expect(model.$toJson()).toBeAModel();
  });
});
