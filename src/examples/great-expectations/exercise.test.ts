import { describe, expect, it } from "vitest";
import { createPerson, Person } from "$lib/person";
import { KanbanBoard } from "$lib/kanban-board";
import exp from "node:constants";

/**
 * toBe: https://vitest.dev/api/expect.html#tobe
 * toBeCloseTo: https://vitest.dev/api/expect.html#tobecloseto
 * toBeInstanceOf: https://vitest.dev/api/expect.html#tobeinstanceof
 * toBeUndefined: https://vitest.dev/api/expect.html#tobeundefined
 * toContain: https://vitest.dev/api/expect.html#tocontain
 * toThrow: https://vitest.dev/api/expect.html#tothrow
 * toThrowError: https://vitest.dev/api/expect.html#tothrowerror
 */

it("should pass if the two numbers would add up correctly in a language other than JavaScript", () => {
  const num1 = 0.2 + 0.1;
  const num2 = 0.3;
  expect(num1.toFixed(2)).toEqual(num2.toFixed(2));
  expect(num1).toBeCloseTo(num2, 15);
});

describe("createPerson", () => {
  it("should create an instance of a person", () => {
    const person = createPerson("Ada Lovelace");
    expect.hasAssertions();
    expect(person.firstName).toEqual("Ada");
    expect(person.lastName).toEqual("Lovelace");
    expect(person).toBeInstanceOf(Person);
  });
});

describe("Kanban Board", () => {
  it('should include "Backlog" in board.statuses', () => {
    const board = new KanbanBoard("Things to Do");
    expect.hasAssertions();
    expect(board.statuses).toContain("Backlog");
  });

  it('should *not* include "Bogus" in board.statuses', () => {
    const board = new KanbanBoard("Things to Do");
    expect.hasAssertions();
    expect(Array.isArray(board.statuses)).toBe(true);
    expect(board.statuses).not.toContain("Bogus");
  });

  it("should include an added status in board.statuses using #addStatus", () => {
    const board = new KanbanBoard("Things to Do");
    expect.hasAssertions();
    board.addStatus("SKIPPED");
    expect(board.statuses).toContain("SKIPPED");
  });

  it("should remove a status using #removeStatus", () => {
    const board = new KanbanBoard("Things to Do");
    expect.hasAssertions();

    expect(board.statuses).toContain("Backlog");

    board.removeStatus("Backlog");

    expect(board.statuses).not.contain("Backlog");
  });
});

describe("Person", () => {
  it("will create a person with a first name", () => {
    const nameToCreate = "아무개";
    const person = new Person(nameToCreate);

    expect(person.firstName).toBe(nameToCreate);
    expect.hasAssertions();
  });

  it("will create a person with a first and last name", () => {
    const person = new Person("아무개 김");
    expect.hasAssertions();
    expect(person.firstName).toBe("아무개");
    expect(person.lastName).toBe("김");
    // Verify that person.lastName is correct.
  });

  it("will create a person with a first, middle, and last name", () => {
    const person = new Person("아무개 볼펜 킴");
    expect.hasAssertions();
    const { firstName, middleName, lastName } = person;
    expect(firstName).toBe("아무개");
    expect(middleName).toBe("볼펜");
    expect(lastName).toBe("킴");
  });

  it("will throw if you provide an empty string", () => {
    const fn = () => {
      new Person("");
    };

    expect.hasAssertions();

    expect(fn).toThrowError("fullName cannot be an empty string.");
  });

  it("will throw a specific error message if you provide an empty string", () => {
    const errorMessage = "fullName cannot be an empty string";

    const fn = () => {
      new Person("");
    };

    expect.hasAssertions();

    expect(fn).toThrowError(errorMessage);
  });

  it("will add a friend", () => {
    const john = new Person("John Lennon");
    const paul = new Person("Paul McCartney");

    expect.hasAssertions();

    john.addFriend(paul);
    expect(john.friends.has(paul)).toBe(true);
  });

  it.todo("will mutually add a friend", () => {
    const john = new Person("John Lennon");
    const paul = new Person("Paul McCartney");

    john.addFriend(paul);

    expect.hasAssertions();
  });

  it("will remove a friend", () => {
    const john = new Person("John Lennon");
    const paul = new Person("Paul McCartney");

    john.addFriend(paul);
    john.removeFriend(paul);

    expect.hasAssertions();

    expect(john.friends.has(paul)).toBe(false);
    // Verify that john.friends does not include paul.
  });

  it("will mutually remove friends", () => {
    const john = new Person("John Lennon");
    const paul = new Person("Paul McCartney");

    john.addFriend(paul);
    john.removeFriend(paul);

    expect.hasAssertions();

    expect(john.friends.has(paul)).toBe(false);
    expect(paul.friends.has(john)).toBe(false);
  });
});

const explode = () => {
  throw new Error("Something went terribly wrong");
};

describe("explode", () => {
  it.todo("should throw an error", () => {
    explode();
  });

  it.todo('should throw a specific error containing "terribly wrong"', () => {
    explode();
  });
});
