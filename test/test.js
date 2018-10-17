"use strict";
var expect = require("chai").expect;
var index = require("../src/index.tsx");

describe("getPlural function test", () => {
  it("should return Boys", () => {
    var result = index.getPlural("Boy");
    expect(result).to.equal("Boys");
  });
});
