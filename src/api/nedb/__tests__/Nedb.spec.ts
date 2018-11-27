import { NedbForElectron } from "../index";

const testDB = new NedbForElectron("test");

describe("testing lowdb class", () => {
  beforeEach(()=> {
    testDB.db.remove({});
  })
  it("should create data in file", () => {
    testDB.db.insert({ name: "user" }, (err, Doc)=> {
      expect(Doc.name).toEqual("user")
    });
  });

  it("should call async methods", async () => {
    let doc =  await testDB.insert("", {
      name: "user",
    });
    expect(doc.name).toBe("user");

    let docs = await testDB.find("",{ name: "user" });
    expect(docs.length).toBeGreaterThan(0)

    let numberUpdated = await testDB.update("", { name: "user" }, { name: "wanglulu" });
    expect(numberUpdated).toBeGreaterThan(0);

    let numberDeleted = await testDB.delete("", { name: "wanglulu" });
    expect(numberDeleted).toBeGreaterThan(0);
  });
});