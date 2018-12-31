import { baseFilter, slugify, deepCloneWithNewKeys, deepCloneWithNewKeysFp} from "./index";

const data = [
  {
    name: "xingwenju",
    age: 40,
  },
  {
    name: "wanglulu",
    age: 38,
  },
];
const expectedData = [
  {
    姓名: "xingwenju",
    年龄: 40,
  },
  {
    姓名: "wanglulu",
    年龄: 38,
  },
];
const typeDefs = {
    name: "姓名",
    age: "年龄"
}

describe("Simple filter", () => {
  it("should filter and sort", () => {
    const filterdData = baseFilter("name")("w")(data);
    expect(filterdData).toHaveLength(2);
  });

  it("should slugify", () => {
    const re = slugify("Hello Xing");
    expect(re).toBe("hello-xing");
  });
});

describe("Simple i18n translater", () => {
  it("should clone with new keys", () => {
    const result = deepCloneWithNewKeys(data, typeDefs, false)
    expect(result).toEqual(expectedData)
    console.log(result);
  });
  it("should clone with new keys reversely", () => {
    const result = deepCloneWithNewKeys(expectedData, typeDefs, true)
    expect(result).toEqual(data)
    console.log(result);
  });
  it("should clone with new keys with functional programming", () => {
    const result = deepCloneWithNewKeysFp(data, typeDefs, false)
    expect(result).toEqual(expectedData)
    console.log(result);
  });
  it("should clone with new keys reversely with functional programming", () => {
    const result = deepCloneWithNewKeysFp(expectedData, typeDefs, true)
    expect(result).toEqual(data)
  });
});
