'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
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
            // this.top = null
            this.top = this.top.next
            return temp.value

        } else {
            return Error("Can't Pop on Empty Stack!");
        }
    }

    isEmpty() {
        if (this.top) {
            return false;
        } else {
            return true;
        }
    }
}



class PseudoQueue {
    constructor() {
        this.innerStack = new Stack();
        this.outerStack = new Stack();
    }

    enqueue(value) {

        this.innerStack.push(value);
        return this.innerStack
    }

    dequeue() {
        if (this.outerStack.isEmpty()) {
            while (!this.innerStack.isEmpty()) {
                this.outerStack.push(this.innerStack.pop());
            }

            return this.outerStack.pop()
        } else {
            while (this.outerStack.top) {
                this.innerStack.push(this.outerStack.pop());
            }

        }

    }
}

module.exports = PseudoQueue