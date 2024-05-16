import { describe, expect, test } from "vitest";

describe("toBe", () => {
  test.fails("2개의 object는 똑같지 않아!", () => {
    expect({ a: 1 }).toBe({ a: 1 });
  });

  test.fails("2개의 배열도 똑같지 않아!", () => {
    expect([1, 2, 3]).toBe([1, 2, 3]);
  });

  test.fails("2개의 함수도 똑같지 않아!", () => {
    expect(() => {}).toBe(() => {});
  });
});

describe("toEqual", () => {
  test("2개의 object 는 똑같아!", () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });

  test("2개의 배열도 똑같아!", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  test("similar multi-dimensional arrays should pass with #toEqual", () => {
    expect([1, [2, 3]]).toEqual([1, [2, 3]]);
  });

  test("functions should to be strictly equal if compared by reference", () => {
    const fn = () => {};
    expect(fn).toBe(fn);
  });
});
