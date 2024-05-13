import { expect, it, test } from "vitest";

it("should work", () => {
  expect(true).toBe(true);
});

it("should work 2", () => {
  expect(false).not.toBe(true);
});

it.fails("should fail", () => {
  expect(true).toBe(false);
});

// npx vitest --mode=development --run --reporter=verbose
test.runIf(process.env.NODE_ENV === "development")("dev 모드여야 한다.", () => {
  expect(process.env.NODE_ENV).toBe("development");
});

// npx vitest --run --reporter=verbose
test.skipIf(process.env.NODE_ENV !== "test")("it should run in test", () => {
  expect(process.env.NODE_ENV).toBe("test");
});
