import { createStore } from "../Helpers";
import Activity from "@/api/models/Activity";
import VuexORM, { Database, Query, Model } from "@vuex-orm/core";

describe("Unit – Query", () => {
  it("retrieves the module as null if not defined", () => {
    createStore([{ model: Activity }]);

    const module = new Query({ $name: "activity" }, "activity").getModule();

    expect(module).toEqual({});
  });

  it("can register hooks to query", () => {
    createStore([{ model: Activity }]);
    const activity = new Activity({
      applicant: "xingwenju",
      content: "test",
    });
    Activity.insert({ data: activity });
    Query.on("afterCreate", model => {
      console.log(model);
      expect(model).toBe(Activity);
      expect(model.applicant).toBe("xingwenju");
    });
  });
});
