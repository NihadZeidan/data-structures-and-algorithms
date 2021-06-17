"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  append(value) {
    let newValue = new Node(value);

    if (!this.root) {
      this.root = newValue;
    } else {
      let current = this.root;
      while (current.next) {
        current = current.next;
      }
      current.next = newValue;
    }
  }

  toString() {
    let string = "";

    let current = this.root;

    while (current) {
      string += `{${Object.entries(current.value)}}->`;
      current = current.next;
    }

    return (string += "Null");
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let sum = key.split("").reduce((acc, value) => {
      return acc + value.charCodeAt(0);
    }, 0);

    let index = (sum * 7) % this.size;
    return index;
  }

  add(key, value) {
    let hashedKey = this.hash(key);

    if (!this.table[hashedKey]) {
      this.table[hashedKey] = new LinkedList();
    }
    this.table[hashedKey].append({ [key]: value });

    return this.table[hashedKey]
  }

  get(key) {
    let hashedKey = this.hash(key);

    if (this.table[hashedKey]) {
      return this.table[hashedKey];
    } else {
      return null;
    }
  }


  contains(key) {
    let lookItUp = this.get(key);

    if (lookItUp) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HashTable
