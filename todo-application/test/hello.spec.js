const { expect } = require("chai");

describe("Greetings", () => {
  it("Can say hello", () => {
    let greet = "Hello";
    expect(greet).to.equal("Hello");
  });
  it("should be able to say hello", () => {
    let greet = "Hi";
    expect(greet).not.equal("Hello");
  });
});
