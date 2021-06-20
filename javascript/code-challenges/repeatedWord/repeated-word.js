"use strict";

let HashTable = require("../hashtables/hashtable.js");

function repeatedWord(string) {
  if (typeof string !== typeof "asd") {
    return "only string accepted";
  }

  let cleanedString = string.replace(/[^a-zA-Z0-9 ]/g, "");
  let arrOfWords = cleanedString.split(" ");

  let myHashTable = new HashTable(1024);

  let final = arrOfWords.find((word, idx) => {
    myHashTable.add(word.toLowerCase(), word.toLowerCase());

    let fromHash = myHashTable.get(word.toLowerCase());

    if (fromHash.root.next) {
      return fromHash.root.value;
    }
  });

  return final;
}

module.exports = repeatedWord;
