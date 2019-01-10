import {
  baseFilter,
  changeCSVHeader,
  slugify,
  deepCloneWithNewKeys,
  deepCloneWithNewKeysBasic,
  changeHeaderOfCSV,
} from "./index";

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
const keysDef = {
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

  it("should changeCSVHeader", () => {
    const re = changeCSVHeader("name,age\nXing,40")(keysDef);
    expect(re).toBe("姓名,年龄");
  });
});

describe("Simple i18n translater", () => {
  it("should clone with new keys basicly", () => {
    const result = deepCloneWithNewKeysBasic(data, keysDef, false);
    expect(result).toEqual(expectedData1);
  });
  it("should clone with new keys basicly and reversely", () => {
    const result = deepCloneWithNewKeysBasic(expectedData1, keysDef, true);
    expect(result).toEqual(data);
  });
  it("should clone with new keys", () => {
    const result = deepCloneWithNewKeys({ data, keysDef, reverse: false });
    expect(result).toEqual(expectedData2);
  });
  it("should clone with new keys reversely", () => {
    const result = deepCloneWithNewKeys({ data: expectedData2, keysDef, reverse: true });
    expect(result).toEqual(expectedData3);
  });
});
