import MailModel from "../Mail";

describe("@/api/models/Mail", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new MailModel();

    expect(model.title).toBe("vuejs");
  });

  it("expect string field", () => {
    expect(new MailModel({}).title).toBe("vuejs");
    expect(new MailModel({ title: "vuejs" }).title).toBe("vuejs");
    expect(new MailModel({ title: 1 }).title).toBe("1");
    expect(new MailModel({ title: true }).title).toBe("true");
    expect(new MailModel({ title: null }).title).toBe("null");
  });

  it("expect to json", () => {
    const model = new MailModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      title: "vuejs",
    };

    expect(json).not.toBeInstanceOf(MailModel);
    expect(json.title).toEqual(expected.title);
  });
});
