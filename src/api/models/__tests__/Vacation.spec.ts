import VacationModel from "../Vacation";

describe("@/api/models/Vacation", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new VacationModel();

    expect(model.applicant).toBe("nobody");
  });

  it("expect string field", () => {
    expect(new VacationModel({}).applicant).toBe("nobody");
    expect(new VacationModel({ applicant: "nobody" }).applicant).toBe("nobody");
  });

  it("expect to json", () => {
    const model = new VacationModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      applicant: "nobody",
    };

    expect(json).not.toBeInstanceOf(VacationModel);
    expect(json.applicant).toEqual(expected.applicant);
  });
});
