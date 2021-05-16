'use strict';


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }



    insert(value) {
        let node = new Node(value)

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }

            current.next = node
        }

        return this;
    }




    includes(value) {
        let currnet = this.head;

        while (currnet) {
            if (value === currnet.value) {
                return true
            } else {
                currnet = currnet.next;
            }
        }
        return false
    }

    toString() {
        let string = "";

        let current = this.head

        while (current) {
            string += String(`{${current.value}}->`);
            current = current.next;
        }

        return string += 'Null';
    }

    findPosition(value) {
        let current = this.head
        let counter = 0
        while (current) {
            counter++
            if (value === current.value) {
                return counter;
            }
            // current = current.next;
        }
    }


    append(value) {
        let node = new Node(value)


        let current = this.head

        while (current.next) {
            current = current.next
        }

        current.next = node

        return this;

    }


    insertAfter(value, newVal) {

        let current = this.head

        while (current.value) {

            if (current.value === value) {
                let node = new Node(newVal);

                node.next = current.next;

                current.next = node;
                return;
            }
            current = current.next

        }


    }

    insertBefore(value, newVal) {

        let current = this.head

        while (current.value) {
            if (current.value === value) {
                let node = new Node(value);

                current.value = newVal

                node.next = current.next;

                current.next = node;
                return;
            }

            if (current.next.value === value) {
                let node = new Node(newVal);

                node.next = current.next;

                current.next = node;
                return;
            }
            current = current.next

        }
    }


}


class Error {
    constructor() {
        this.location = LinkedList;
        this.message = 'Something went wrong in the class methods !'
    }
}

new Error

module.exports = LinkedList;