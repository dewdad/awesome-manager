import TestModel from "../Test";

describe("@/api/models/Test", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new TestModel();

    expect(model.title).toBe("coder");
  });

  it("expect string field", () => {
    expect(new TestModel({}).title).toBe("coder");
    expect(new TestModel({ title: "coder" }).title).toBe("coder");
  });

  it("expect to json", () => {
    const model = new TestModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      title: "coder",
    };

    expect(json).not.toBeInstanceOf(TestModel);
    expect(json.title).toEqual(expected.title);
  });
});
