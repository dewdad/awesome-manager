import {
  stringArrayFromClassKeys,
  objectArrayFromClassKeys,
  classFromStringArray,
  selectedDeepClone,
  selectedDeepMining,
} from "./tranform-string-array-with-key-object";

class Model {
  name: "name";
  type: "type";
  address: {};
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.address = {};
  }
}
describe("Helpers functions about class", () => {
  it("should pick string keys only", () => {
    const result = stringArrayFromClassKeys(new Model("model", "type"));
    expect(result[0]).toBe("name");
    expect(result[1]).toBe("type");
    expect(result[2]).toBe(undefined);
  });
  it("should pick object keys only", () => {
    const result = objectArrayFromClassKeys(new Model("model", "type"));
    expect(result[0]).toBe("address");
    expect(result[1]).toBe(undefined);
  });
});

describe("create class from string enumerations", () => {
  it("", () => {
    /** Create a K:V */
    const Direction = classFromStringArray(["name", "type", "address"]);
    expect(Direction.name).toBe("name");
    /** Create a Type */
    type Direction = keyof typeof Direction;

    /**
     * Sample using a string enum
     */
    let sample: Direction;
    sample = Direction.type; // Okay
    expect(sample).toBe("type");
  });
});

describe("create object from selected type of given object", () => {
  it("", () => {
    /** Create a K:V */
    const model = {
      name: "xingwenju",
      address: {
        home: "here",
        house: {
          no: "1",
        },
      },
    };
    const o = selectedDeepClone(model, "object");
    const x = selectedDeepClone(o, "object");
    const y = selectedDeepClone(x, "object");
    const z = selectedDeepClone(y, "object");
    expect(x).toEqual(y);
    expect(x).toEqual(z);
    expect(y).toEqual(z);

    const m = selectedDeepMining(model, "object");
    expect(m).not.toEqual(x);
  });
});
