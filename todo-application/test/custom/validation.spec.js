const { expect } = require("chai");
const common = require("../../validation/common");

describe("validation", () => {
  it("can validate empty string", () => {
    expect(common.isEmpty(null)).to.equal(true);
    expect(common.isEmpty(undefined)).to.equal(true);
    expect(common.isEmpty("")).to.equal(true);
    expect(common.isEmpty(" ")).to.equal(true);
    expect(common.isEmpty({})).to.equal(true);
  });
});
