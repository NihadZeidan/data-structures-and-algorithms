"use strict";

function leftJoin(hashMapOne, hashMapTwo) {
  let result = [];
  let firstTable = hashMapOne.table;
  let secondTable = hashMapTwo.table;

  for (let i = 0; i < firstTable.length; i++) {
    let validFirst = firstTable[i];
    if (validFirst) {
      let validSecond = secondTable[i];
      if (validSecond) {
        let valuesFromSecond = Object.values(validSecond.root.value)[0];
        result.push([
          Object.keys(validFirst.root.value)[0],
          Object.values(validFirst.root.value)[0],
          valuesFromSecond,
        ]);
      } else {
        result.push([
          Object.keys(firstTable[i].root.value)[0],
          Object.values(firstTable[i].root.value)[0],
          "Null",
        ]);
      }
    }
  }

  return result;
}
module.exports = leftJoin;
