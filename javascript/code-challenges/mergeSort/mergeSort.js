"use strict";
function mergeSort(input) {
  if (!input) {
    return "Input Must Be Array of Integers";
  } else if (typeof input === typeof 7) {
    return "Input Must Be Array of Integers";
  } else if (typeof input === typeof "string") {
    return "Input Must Be Array of Integers";
  }

  let n = input.length;
  if (n < 2) return input;

  const mid = Math.ceil(n / 2);

  const left = input.slice(0, mid);
  const right = input.slice(mid, n);

  const sortedLeftArray = mergeSort(left);
  const sortedRightArray = mergeSort(right);

  return merge(sortedLeftArray, sortedRightArray);
}

function merge(left, right) {
  let finalArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      finalArr.push(left.shift());
    } else {
      finalArr.push(right.shift());
    }
  }

  return [...finalArr, ...left, ...right];
}

module.exports = mergeSort;

// ------------------------------------------------------------

// Another Solution

function MergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = arr.slice(0, mid);

    let right = arr.slice(mid, n);
    MergeSort(left);
    MergeSort(right);

    return Merge(left, right, arr);
  }
}

function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
  return arr;
}

