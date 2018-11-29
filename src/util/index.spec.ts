import { baseFilter }  from "./index";

describe("Simple filter", () => {
  const data = [
    {
      "name": "xingwenju",
      "age": 40
    },
    {
      "name": "wanglulu",
      "age": 38
    },
  ]
  it("should filter and sort", ()=> {
    const filterdData = baseFilter(data, "name","w")
    expect(filterdData).toHaveLength(2);
  })
})