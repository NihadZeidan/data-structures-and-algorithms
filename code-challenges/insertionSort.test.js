"use strict";
let insertionSort = require("../javascript/code-challenges/insertionSort/insertionSort.js");

describe("TESTING INSERTION SORT FUNCTION", () => {
  it("sort reversed array", () => {
    let array = [20, 18, 12, 8, 5, -2];
    let test = insertionSort(array);
    expect(test).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it("sort with equal values ", () => {
    let array = [5, 12, 7, 5, 5, 7];
    let test = insertionSort(array);
    expect(test).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it("sort nearly sorted array", () => {
    let array = [2, 3, 5, 7, 13, 11];
    let test = insertionSort(array);
    expect(test).toEqual([2, 3, 5, 7, 11, 13]);
  });

  it("edge case 1 ", () => {
    let test = insertionSort();
    expect(test).toEqual("Input Must Be Array of Integers");
  });

  it("edge case 2 ", () => {
    let notArr = 4;
    let test = insertionSort(notArr);
    expect(test).toEqual("Input Must Be Array of Integers");
  });

  it("edge case 3 ", () => {
    let notArr = "Nihad";
    let test = insertionSort(notArr);
    expect(test).toEqual("Input Must Be Array of Integers");
  });
});
