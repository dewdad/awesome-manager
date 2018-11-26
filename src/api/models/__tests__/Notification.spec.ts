import NotificationModel from "../Notification";

describe("@/api/models/Notification", () => {
  it("exports a valid Vuex ORM Model", () => {
    const model = new NotificationModel();

    expect(model.title).toBe("notification");
  });

  it("expect string field", () => {
    expect(new NotificationModel({}).title).toBe("notification");
    expect(new NotificationModel({ title: "notification" }).title).toBe("notification");
  });

  it("expect to json", () => {
    const model = new NotificationModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      title: "notification",
    };

    expect(json).not.toBeInstanceOf(NotificationModel);
    expect(json.title).toEqual(expected.title);
  });
});
