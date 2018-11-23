import * as genericModule from "../Generic";

describe("@state/modules/Generic", () => {
  it("exports a valid Vuex module", () => {
    expect(genericModule).toBeAVuexModule();
  });
});
