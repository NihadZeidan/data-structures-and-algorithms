'use strict';

let Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }



    preOrder() {
        let finalResult = [];

        function traversal(node) {
            finalResult.push(node.value);
            if (node.left) traversal(node.left);
            if (node.right) traversal(node.right);
        }
        traversal(this.root)
        return finalResult;

    }



    inOrder() {
        let finalResult = [];

        function traversal(node) {
            if (node.left) traversal(node.left);
            finalResult.push(node.value);
            if (node.right) traversal(node.right);
        }

        traversal(this.root)
        return finalResult;

    }



    postOrder() {
        let finalResult = [];

        function traversal(node) {
            if (node.left) traversal(node.left);
            if (node.right) traversal(node.right);
            finalResult.push(node.value);
        }

        traversal(this.root)
        return finalResult;

    }

    findMaximumValue() {
        if (this.root == null) {
            return 'Tree is Empty'
        }

        let max = this.root.value;


        function maximum(root) {

            if (root.value > max) {
                max = root.value
            }

            if (root.left) {
                maximum(root.left)

            }

            if (root.right) {
                maximum(root.right)
            }

            return max

        }

        return maximum(this.root);
    }


    breadthFirst() {
        if (this.root == null) {
            return 'Tree is Empty'
        }

        let result = []
        let breadthQ = new Queue();


        function bFirst(root) {
            breadthQ.enqueue(root)

            while (breadthQ.front) {
                let front = breadthQ.dequeue();

                result.push(front.value);

                if (front.left)
                    breadthQ.enqueue(front.left);

                if (front.right)
                    breadthQ.enqueue(front.right);
            }

        }
        bFirst(this.root)
        return result
    }


}



class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }


    add(value) {
        if (typeof(value) != typeof(5)) return 'Only Numbers Can Added to this BinarySearchTree'


        let node = new Node(value)

        if (this.root === null) this.root = node
        let currentRoot = this.root



        while (currentRoot) {
            if (node.value === currentRoot.value) return 'Value already in the BinarySearchTree';

            if (node.value > currentRoot.value) {
                if (currentRoot.right === null) {
                    currentRoot.right = node;
                } else {
                    currentRoot = currentRoot.right;
                }
            }

            if (node.value < currentRoot.value) {
                if (currentRoot.left === null) {
                    currentRoot.left = node;
                } else {
                    currentRoot = currentRoot.left;
                }
            }
        }
    }


    contains(value) {
        let currentRoot = this.root

        while (currentRoot) {

            if (currentRoot.value === value) {
                return true
            }

            if (value > currentRoot.value) {
                currentRoot = currentRoot.right;
            } else if (value < currentRoot.value) {
                currentRoot = currentRoot.left;
            }

        }

        return false;
    }



}

module.exports = {
    BinaryTree,
    BinarySearchTree,
    Node
}