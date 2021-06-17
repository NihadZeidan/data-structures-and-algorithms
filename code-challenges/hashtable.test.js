"use strict";

let HashTable = require("../javascript/code-challenges/hashtables/hashtable.js");

describe("Testing HashTables", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    let myTable = new HashTable(1024);

    let test = myTable.add("Nihad", "079");

    expect(myTable.size).toEqual(1024);
    expect(test.toString()).toEqual("{Nihad,079}->Null");
  });

  it("Retrieving based on a key returns the value stored", () => {
    let myTable = new HashTable(1024);

    let test = myTable.add("Nihad", "079");

    let retrive = myTable.get("Nihad");

    expect(myTable.size).toEqual(1024);
    expect(retrive).toEqual(myTable.get("Nihad"));
  });

  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    let myTable = new HashTable(1024);

    let test = myTable.add("Nihad", "079");

    let notThere = myTable.get("anything");

    expect(myTable.size).toEqual(1024);
    expect(notThere).toEqual(null);
  });

  it("Successfully handle a collision within the hashtable", () => {
    let myTable = new HashTable(1024);

    let test = myTable.add("Nihad", "079999");
    let test2 = myTable.add("Nihad", "07888");
    let test3 = myTable.add("Nihad", "07777");

    expect(myTable.size).toEqual(1024);
    expect(test.toString()).toEqual(
      "{Nihad,079999}->{Nihad,07888}->{Nihad,07777}->Null"
    );
  });

  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    let mySable = new HashTable(1024);

    let exam1 = mySable.add("Nihad", "ffff");
    let exam2 = mySable.add("Nihad", "ssss");
    let exam3 = mySable.add("Nihad", "aaaa");

    let getFirst = mySable.get("Nihad");

    expect(getFirst.root.value).toEqual(exam1.root.value);
    expect(getFirst.root.next.value).toEqual(exam2.root.next.value);
    expect(getFirst.root.next.next.value).toEqual(exam3.root.next.next.value);
  });

  it("Successfully hash a key to an in-range value", () => {
    let myTable = new HashTable(1024);

    let test = myTable.hash("Nihad");

    expect(test).toEqual(316);
  });
});
