'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
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


    peek() {
        if (this.top) {
            return this.top.value
        } else {
            return Error("Can't Peek on Empty Stack !")
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

// --------------------------


class Queue {
    constructor() {
        this.front = null
    }

    enqueue(value) {
        let node = new Node(value);
        let pointer = null;
        // node.next = rear

        if (this.front) {

            this.front.next = node


        } else {
            this.front = node
        }

    }

    dequeue() {
        if (this.front) {
            let temp = new Node(this.front.value);
            this.front = this.front.next

            return temp.value
        } else {
            return Error("Can't dequeue on Empty Queue");
        }
    }


    isEmpty() {
        if (this.front) {
            return false;
        } else {
            return true;
        }
    }
}