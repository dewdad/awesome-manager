import DocumentModel from "../Document";

describe("@/api/models/Document", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new DocumentModel();

    expect(model.type).toBe("XXX");
  });

  it("expect string field", () => {
    expect(new DocumentModel({}).type).toBe("XXX");
    expect(new DocumentModel({ type: "XXX" }).type).toBe("XXX");
    expect(new DocumentModel({ type: 1 }).type).toBe("1");
    expect(new DocumentModel({ type: true }).type).toBe("true");
    expect(new DocumentModel({ type: null }).type).toBe("null");
  });

  it("expect to json", () => {
    const model = new DocumentModel();
    const json = model.$toJson();

    const expected = {
      _id: null,
      attachment: "XXX",
      author: null,
      classification: "XXX",
      copyEntity: null,
      fromEntity: null,
      mark: "XXX",
      sendingEntity: null,
      startDate: "XXX",
      tags: "XXX",
      text: "XXX",
      title: "XXX",
      toEntity: null,
      type: "XXX",
    };
    expect(json).not.toBeInstanceOf(DocumentModel);
    expect(json).toEqual(expected);
  });
});
