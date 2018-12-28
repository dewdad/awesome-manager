import MenuModel from "../Menu";

describe("@/api/models/Menu", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new MenuModel();

    expect(model.title).toBe("title");
  });

  it("expect string field", () => {
    expect(new MenuModel({}).title).toBe("title");
    expect(new MenuModel({ title: "title" }).title).toBe("title");
  });

  it("expect to json", () => {
    const model = new MenuModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      title: "title",
    };

    expect(json).not.toBeInstanceOf(MenuModel);
    expect(json.title).toEqual(expected.title);
  });
});
