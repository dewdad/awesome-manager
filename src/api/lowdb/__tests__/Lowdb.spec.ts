import { LowdbForElectron } from "../index";

const testDB = new LowdbForElectron("test");

describe("testing lowdb class", () => {
  beforeEach(() => {
    testDB.clear("activity");
    testDB.dbInit(["activity"]);
  });

  it("should create node in file", () => {
    let activities = testDB.db
      .read()
      .get("activity")
      .value();
    expect(activities).not.toBeNull;
  });

  it("should create data in file", () => {
    testDB.db
      .read()
      .get("activity")
      .push({ name: "xingwenju" })
      .write();

    let activities = testDB.db
      .read()
      .get("activity")
      .value();

    expect(activities.length).toBeGreaterThan(0);
  });

  it("should call instance methods", () => {
    testDB.insert("activity", {
      name: "xingwenju",
    });
    testDB.insert("activity", {
      name: "wanglulu",
    });

    let activities = testDB.all("activity");
    expect(activities.length).toBe(2);

    activities = testDB.find("activity", { name: "xingwenju" });
    expect(activities.length).toBe(1);

    testDB.update("activity", { name: "xingwenju" }, { name: "wanglulu" });
    activities = testDB.find("activity", { name: "xingwenju" });
    expect(activities.length).toBe(0);

    testDB.delete("activity", { name: "wanglulu" });
    activities = testDB.find("activity", { name: "wanglulu" });
    expect(activities.length).toBe(0);
  });
});
