const assert = require("assert");
const Calculator = require("../app/calculator");

describe("Calculator Function Test", () => {
  describe("Addition Test", () => {
    it("should return 7 when 5 + 2", () => {
      assert.equal(Calculator.add(5, 2), 7); // PASS
    });

    it("should return 8 when 5 + 2", () => {
      assert.equal(Calculator.add(5, 2), 8); // FAIL
    });
  });

  describe("Subtraction Test", () => {
    it("should return 3 when 5 - 2", () => {
      assert.equal(Calculator.sub(5, 2), 3); // PASS
    });

    it("should return 5 when 5 - 2", () => {
      assert.equal(Calculator.sub(5, 2), 5); // FAIL
    });
  });

  describe("Multiplication Test", () => {
    it("should return 10 when 5 * 2", () => {
      assert.equal(Calculator.mul(5, 2), 10); // PASS
    });

    it("should return 12 when 5 * 2", () => {
      assert.equal(Calculator.mul(5, 2), 12); // FAIL
    });
  });

  describe("Division Test", () => {
    it("should return 5 when 10 / 2", () => {
      assert.equal(Calculator.div(10, 2), 5); // PASS
    });

    it("should return 2 when 10 / 2", () => {
      assert.equal(Calculator.div(10, 2), 2); // FAIL
    });
  });
});
