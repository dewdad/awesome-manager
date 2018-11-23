import AddressModel from "../Address";

describe("@/api/models/Address", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new AddressModel();

    expect(model.direction).toBe("none");
  });

  it("expect string field", () => {
    expect(new AddressModel({}).direction).toBe("none");
    expect(new AddressModel({ direction: "none" }).direction).toBe("none");
  });

  it("expect to json", () => {
    const model = new AddressModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      direction: "none",
    };

    expect(json).not.toBeInstanceOf(AddressModel);
    expect(json.direction).toEqual(expected.direction);
  });
});
