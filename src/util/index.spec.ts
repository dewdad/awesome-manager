import { baseFilter, slugify }  from "./index";

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
    const filterdData = baseFilter("name")("w")(data)
    expect(filterdData).toHaveLength(2);
  })

  it("should slugify", ()=> {
    const re = slugify("Hello Xing")
    expect(re).toBe("hello-xing")
  })
})