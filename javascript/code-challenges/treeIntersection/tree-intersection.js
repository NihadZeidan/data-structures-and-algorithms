"use strict";

const HashTable = require("../hashtables/hashtable.js");
const tree = require("../tree/tree.js");

function treeIntersection(fTree, sTree) {
  let fTreeInOrder = fTree.inOrder();
  let sTreeInOrder = sTree.inOrder();

  let result = [];
  const myHashTable = new HashTable(1024);

  for (let i of fTreeInOrder) {
    myHashTable.add(`${i}`, i);
  }

  for (let y of sTreeInOrder) {
    myHashTable.add(`${y}`, y);
  }

  for (let z of sTreeInOrder) {
    let find = myHashTable.get(`${z}`);
    if (find.root.next) {
      result.push(find.root.value);
    }
  }

  let final = result.map((obj) => {
    for (let key in obj) {
      return obj[key];
    }
  });

  return final;
}

module.exports = treeIntersection;
