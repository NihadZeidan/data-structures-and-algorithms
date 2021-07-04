"use strict";

class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class DoubleLikedList {
  constructor(head) {
    this.head = head;
  }

  add(value) {
    let node = new Node(value);
    let current = this.head;
    if (current == null) {
      this.head = node;
    } else {
      while (current) {
        if (current.next === null) {
          current.next = node;
          current.next.prev = current;
          return "done";
        } else {
          current = current.next;
        }
      }
    }
  }
  go(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      } else {
        current = current.next;
      }
    }
    return "value not found !";
  }

  back() {
    if (this.head.prev) {
      return this.head.prev;
    } else {
      return null;
    }
  } 
  forward() {
    if (this.head.next) {
      return this.head.next;
    } else {
      return null;
    }
  }
}

// let head = new Node(1);
let myLL = new DoubleLikedList();

myLL.add(1);
myLL.add(2);
myLL.add(3);
myLL.add(4);

console.log(myLL.forward());
