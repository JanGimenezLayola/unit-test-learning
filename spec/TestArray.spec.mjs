import TestArray from '../TestArray.js'

describe("Array [1, 3, 10, -1, 0, 3]", function () {
  let testArray;

  beforeEach(function () {
    testArray = new TestArray([1, 3, 10, -1, 0, 3]);
  });

  it("should be return [3]", function () {
    expect(testArray.checkDuplicated()).toEqual([3]);
  });
});

describe("Array [1, 3, 10, -1]", function () {
  let testArray;

  beforeEach(function () {
    testArray = new TestArray([1, 3, 10, -1, 0]);
  });

  it("should be return []", function () {
    expect(testArray.checkDuplicated()).toEqual([]);
  });
});

describe("Array [1, 1] and [1, 3, 3]", function () {
  let testArray;

  it("should be return [1]", function () {
    testArray = new TestArray([1, 1]);
    expect(testArray.checkDuplicated()).toEqual([1]);
  });

  it("should be return [3]", function () {
    testArray = new TestArray([1, 3, 3]);
    expect(testArray.checkDuplicated()).toEqual([3]);
  });
});

// extra test
describe("Array [1, 3, 10, -1, 3, 1]", function () {
  let testArray;

  beforeEach(function () {
    testArray = new TestArray([1, 3, 10, -1, 3, 1]);
  });

  it("should be return [1, 3]", function () {
    expect(testArray.checkDuplicated()).toEqual([1, 3]);
  });
});

