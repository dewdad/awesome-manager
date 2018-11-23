import ItemModel from "../Item";

describe("@/api/models/Item", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new ItemModel();

    expect(model.name).toBe("food");
  });

  it("expect string field", () => {
    expect(new ItemModel({}).name).toBe("food");
    expect(new ItemModel({ name: "food" }).name).toBe("food");
  });

  it("expect to json", () => {
    const model = new ItemModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      name: "food",
    };

    expect(json).not.toBeInstanceOf(ItemModel);
    expect(json.name).toEqual(expected.name);
  });
});
