import { baseFilter, slugify, deepCloneWithNewKeys, deepCloneWithNewKeysBasic } from "./index";

// 原始数据
const data = [
  {
    name: "xingwenju",
    age: 40,
    entity: {
      name: "MFA",
    },
  },
  {
    name: "wanglulu",
    age: 38,
  },
];
// 翻译键名，键值不变
const expectedData1 = [
  {
    姓名: "xingwenju",
    年龄: 40,
    单位: {
      name: "MFA",
    },
  },
  {
    姓名: "wanglulu",
    年龄: 38,
  },
];
// 翻译键名，键值统一为字符串
const expectedData2 = [
  {
    姓名: "xingwenju",
    年龄: 40,
    单位: "MFA",
  },
  {
    姓名: "wanglulu",
    年龄: 38,
  },
];
// 不翻译键名，键值统一为字符串
const expectedData3 = [
  {
    name: "xingwenju",
    age: 40,
    entity: "MFA",
  },
  {
    name: "wanglulu",
    age: 38,
  },
];
// 键名翻译的对照定义
const typeDefs = {
  name: "姓名",
  age: "年龄",
  entity: "单位",
};

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
  it("should clone with new keys basicly", () => {
    const result = deepCloneWithNewKeysBasic(data, typeDefs, false);
    expect(result).toEqual(expectedData1);
  });
  it("should clone with new keys basicly and reversely", () => {
    const result = deepCloneWithNewKeysBasic(expectedData1, typeDefs, true);
    expect(result).toEqual(data);
  });
  it("should clone with new keys", () => {
    const result = deepCloneWithNewKeys(data, typeDefs, false);
    expect(result).toEqual(expectedData2);
  });
  it("should clone with new keys reversely", () => {
    const result = deepCloneWithNewKeys(expectedData2, typeDefs, true);
    expect(result).toEqual(expectedData3);
  });
});
