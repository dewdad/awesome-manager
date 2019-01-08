import EvaluationModel from "../Evaluation";

describe("@/api/models/Evaluation", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new EvaluationModel();

    expect(model.name).toBe("secretary");
  });

  it("expect string field", () => {
    expect(new EvaluationModel({}).name).toBe("secretary");
    expect(new EvaluationModel({ name: "secretary" }).name).toBe("secretary");
  });

  it("expect to json", () => {
    const model = new EvaluationModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      name: "secretary",
    };

    expect(json).not.toBeInstanceOf(EvaluationModel);
    expect(json.name).toEqual(expected.name);
  });
});
