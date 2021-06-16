"use strict";

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], // middle element
    i = left, // left pointer
    j = right; // right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); // swapping two elements
      i++;
      j--;
    }
  }
  return i;
}

function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

module.exports = quickSort;

// ---------------------------------------------------------

// Another Solution

function QuickS(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let lowArr = [];
  let highArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      highArr.push(arr[i]);
    } else {
      lowArr.push(arr[i]);
    }
  }
  
  return QuickS(lowArr).concat(pivot, QuickS(highArr));
}
