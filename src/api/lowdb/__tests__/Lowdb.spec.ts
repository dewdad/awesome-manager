import { LowdbForElectron } from "../index";
import Datastore from "lowdb";

const testDB = new LowdbForElectron("test");

const entities = ["user", "document", "account"];
const pool = entities.reduce((entitiesDb, entity) => {
  const DB = new LowdbForElectron(entity);
  DB.dbCreate(entity);
  entitiesDb[entity] = DB;
  return entitiesDb;
}, {});

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

describe("testing lowdb pool", () => {
  it("should create pool with file", () => {
    const DB = pool["user"];
    expect(DB).not.toBeNull();
    expect(DB.db).not.toBeNull();
  });
  it("should set default value of entity", () => {
    const DB = pool["user"];
    DB.clear("user");
    const defaultValue = DB.db.get("user").value();
    expect(defaultValue).toEqual([]);
  });
  it("should set new value of entity", () => {
    const DB = pool["user"];
    DB.clear("user");
    DB.insert("user", {
      name: "xingwenju",
    });
    const newValue = DB.find("user", {});
    expect(newValue).toEqual([{ name: "xingwenju" }]);
  });
});
