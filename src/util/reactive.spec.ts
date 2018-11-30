import { Subscription } from "rxjs";
import {
  filterExample,
  beautyExample,
  reduceExample,
  mapToExample,
  delayExample,
  scanExample,
  pipeExample,
} from "./reactive";

describe("Test rxjs operators", () => {
  it("filter operator with mostbeautiful", () => {
    const couples = beautyExample();
    expect(couples).toBeInstanceOf(Subscription);
  });
  it("filter operator with basic filter", () => {
    const filter = filterExample();
    expect(filter).toBeInstanceOf(Subscription);
  });
  it("mapTo operator with interval", () => {
    const mapTo = mapToExample();
    expect(mapTo).toBeInstanceOf(Subscription);
  });
  it("reduce operator", () => {
    const mapTo = reduceExample();
    expect(mapTo).toBeInstanceOf(Subscription);
  });
  it("scan operator", () => {
    const scan = scanExample();
    expect(scan).toBeInstanceOf(Subscription);
  });
});

describe("Test rxjs pipe map", () => {
  it("delay operator", () => {
    const delay = delayExample();
    expect(delay).toBeInstanceOf(Subscription);
  });
  it("map and take operator with mostbeautiful", () => {
    const piped = pipeExample();
    expect(piped).toBeInstanceOf(Subscription);
  });
});
