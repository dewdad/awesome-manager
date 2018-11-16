import TestModel from "../Test";

describe("@/api/models/Test", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new TestModel();

    expect(model.name).toBe("xingwenju");
  });

  it("expect string field", () => {
    expect(new TestModel({}).name).toBe("xingwenju");
    expect(new TestModel({ name: "xingwenju" }).name).toBe("xingwenju");
    expect(new TestModel({ name: 1 }).name).toBe("1");
    expect(new TestModel({ name: true }).name).toBe("true");
    expect(new TestModel({ name: null }).name).toBe("null");
  });

  it("expect to json", () => {
    const model = new TestModel();
    const json = model.$toJson();

    const expected = {
      _id: null,
      name: "xingwenju",
    };

    expect(json).not.toBeInstanceOf(TestModel);
    expect(json).toEqual(expected);
  });
});
