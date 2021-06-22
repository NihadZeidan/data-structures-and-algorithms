"use strict";

const leftJoin = require("../javascript/code-challenges/leftJoin/left-join.js");
const HashTable = require("../javascript/code-challenges/hashtables/hashtable.js");

describe("Testing Left Join Function", () => {
  it("it should succeed", () => {
    let firstHash = new HashTable(64);
    let secondHash = new HashTable(64);

    firstHash.add("fond", "enamored");
    firstHash.add("wrath", "anger");
    firstHash.add("diligent", "employed");
    firstHash.add("outfit", "garb");
    firstHash.add("guide", "usher");

    secondHash.add("fond", "averse");
    secondHash.add("wrath", "delight");
    secondHash.add("diligent", "idle");
    secondHash.add("guide", "follow");
    secondHash.add("flow", "jam");

    let test = leftJoin(firstHash, secondHash);

    expect(test).toEqual([
      ["wrath", "anger", "delight"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", "Null"],
    ]);
  });

  it("it should succeed with two Null", () => {
    let firstHash = new HashTable(64);
    let secondHash = new HashTable(64);

    firstHash.add("fond", "enamored");
    firstHash.add("wrath", "anger");
    firstHash.add("diligent", "employed");
    firstHash.add("outfit", "garb");
    firstHash.add("guide", "usher");
    firstHash.add("xxx", "sss");

    secondHash.add("fond", "averse");
    secondHash.add("wrath", "delight");
    secondHash.add("diligent", "idle");
    secondHash.add("guide", "follow");
    secondHash.add("flow", "jam");

    let test = leftJoin(firstHash, secondHash);

    expect(test).toEqual([
      ["wrath", "anger", "delight"],
      ["fond", "enamored", "averse"],
      ["xxx", "sss", "Null"],
      ["guide", "usher", "follow"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", "Null"],
    ]);
  });

  it("it should succeed even when the second map is less than the first", () => {
    let firstHash = new HashTable(64);
    let secondHash = new HashTable(64);

    firstHash.add("fond", "enamored");
    firstHash.add("wrath", "anger");
    firstHash.add("diligent", "employed");
    firstHash.add("outfit", "garb");
    firstHash.add("guide", "usher");

    secondHash.add("fond", "averse");
    secondHash.add("wrath", "delight");
    secondHash.add("diligent", "idle");

    let test = leftJoin(firstHash, secondHash);

    expect(test).toEqual([
      ["wrath", "anger", "delight"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "Null"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", "Null"],
    ]);
  });
});
