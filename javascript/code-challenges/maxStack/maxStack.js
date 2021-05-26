'use strict'

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class MaxStack {
    constructor() {
        this.top = null
    }

    push(value) {
        let node = new Node(value);

        if (this.top) {
            node.next = this.top
            this.top = node
        } else {

            this.top = node
        }
    }

    pop() {

        if (this.top) {
            let temp = new Node(this.top.value);

            this.top = this.top.next
            return temp.value

        } else {
            return Error("Can't Pop on Empty Stack!");
        }



    }


    peek() {
        if (this.top) {
            return this.top.value
        } else {
            return Error("Can't Peek on Empty Stack!")
        }
    }

    isEmpty() {
        if (this.top) {
            return false;
        } else {
            return true;
        }
    }

    getMax() {
        let toCompar = this.peek()
        this.pop()
        if (toCompar > this.peek()) {
            return toCompar
        } else {
            this.pop()
        }

    }
}