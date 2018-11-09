import Activity from "@/api/models/Activity";
import { createStore } from "../Helpers";

describe("Unit – Model", () => {
  it("can create from store", () => {
    // only create object, not yet to store
    const activity = new Activity({
      applicant: "xingwenju",
      content: "test",
    });
    expect(activity).toBeInstanceOf(Activity);
    console.log(activity.$toJson);

    // use object in store
    const store = createStore([{ model: Activity }], "entities");
    store.dispatch("entities/activity/create", {
      data: activity,
    });

    Activity.insert({
      data: activity,
    });

    const a1 = store.getters["entities/activity/find"](1);
    console.log(a1);

    const a2 = activity.$find(1);
    console.log(a2);
    expect(a2).toEqual(a1);

    const a3 = Activity.find(1);
    console.log(a3);
    expect(a2).toEqual(a3);
  });
});
