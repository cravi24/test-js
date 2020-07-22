const index = require("./index");
const { getData } = require("./dependency");

// This doesn't let you debug the test
jest.mock("./dependency.js", () => () => () => "some other data");
// This lets you debug
// jest.mock("./dependency.js", () => {
//   return () => () => "some other data";
// });

describe("test suite", () => {
  test("test1", () => {
    expect(index()).toBe("some other data");
  });
});
