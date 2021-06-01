'use strict'

const Queue = require("../stacksAndQueues/stacks-and-queues").Queue;

class Node {
    constructor(value) {
        this.value = value;
        this.sib = null;
        this.child = null;
    }
}



class KAryTree {
    constructor(root = null) {
        this.root = root
    }

    addRoot(val) {
        let node = new Node(val)
        this.root = node

    }

    addSib(val) {
        let node = new Node(val)

        if (this.sib) {
            let current = this.sib
            while (current.sib) {
                current = this.sib.sib
            }
            current.sib = node

        } else {
            this.sib = node
        }
    }

    addChild(val) {
        let node = new Node(val)

        if (this.child) {
            let current = this.child
            while (current.child) {
                current = this.child.child
            }
            current.child = node

        } else {
            this.child = node
        }
    }

}


function fizzBuzzTree(tree) {
    let Q = new Queue();
    let newTree = new KAryTree()
    let flag = ''

    Q.enqueue({ root: tree.root, flag: 'root' });

    function fizzBuzzAll(tree) {

        for (let oneChild in tree.child) {
            Q.enqueue({ child: tree.child[oneChild], flag: 'child' });
        }

        for (let oneSib in tree.sib) {
            Q.enqueue({ sib: tree.sib[oneSib], flag: 'sib' });
        }

        while (Q.front) {
            let front = Q.dequeue();
            if (front.flag == 'root' && front.root) {
                if (front.root.value % 3) {
                    front = 'Fizz';
                    newTree.addRoot(front)
                } else if (front.root.value % 5) {
                    front = "Buzz";
                    newTree.addRoot(front)
                } else if (front.root.value % 15) {
                    front = "FizzBuzz";
                    newTree.addRoot(front)
                } else {
                    front = toString(front.value);
                }

            }

            if (front.flag == 'child' && front.child) {
                if (front.child.value % 3) {
                    let front = 'Fizz'
                    newTree.addChild(front)
                }
                if (front.child.value % 5) {
                    front = "Buzz"
                    newTree.addChild(front)
                }
                if (front.child.value % 15) {
                    front = "FizzBuzz"
                    newTree.addChild(front)
                }
            }

            if (front.flag == 'sib' && front.sib) {
                if (front.sib % 3) {
                    let front = 'Fizz'
                    newTree.addSib(front)
                }
                if (front.sib % 5) {
                    front = "Buzz"
                    newTree.addSib(front)
                }
                if (front.sib % 15) {
                    front = "FizzBuzz"
                    newTree.addSib(front)
                }
            }

        }

        return newTree

    }

    return fizzBuzzAll(tree);
}

module.exports = {
    fizzBuzzTree,
    KAryTree,

}