"use strict";

function insertionSort(arr) {
  if (!arr) {
    return "Input Must Be Array of Integers";
  } else if (typeof arr === typeof 7) {
    return "Input Must Be Array of Integers";
  } else if (typeof arr === typeof "string") {
    return "Input Must Be Array of Integers";
  }

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
}

module.exports = insertionSort;
