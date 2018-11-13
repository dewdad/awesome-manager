import Activity from "@/api/models/Activity";

const createStore = (global as any).createORMStore;
describe("Unit – Model", () => {
  it("can create from store", () => {
    // only create object, not yet to store
    const activity = new Activity({
      applicant: "xingwenju",
      content: "test",
    });
    expect(activity).toBeInstanceOf(Activity);

    // use object in store
    const store = (global as any).createORMStore([{ model: Activity }], "entities");
    store.dispatch("entities/activity/create", {
      data: activity,
    });

    Activity.insert({
      data: activity,
    });

    const newActivity = store.getters["entities/activity/find"](1);

    const instanceFindActivity = activity.$find(1);
    expect(instanceFindActivity).toEqual(newActivity);

    const classFindActivity = Activity.find(1);
    expect(classFindActivity).toEqual(newActivity);
  });
});
