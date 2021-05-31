'use strict'

const Node = require('../javascript/code-challenges/tree/tree.js').Node
const BinaryTree = require('../javascript/code-challenges/tree/tree.js').BinaryTree
const BinarySearchTree = require('../javascript/code-challenges/tree/tree.js').BinarySearchTree



describe('TESTING BINARY TREE', () => {
    it('Can successfully instantiate an empty tree', () => {
        let test = new BinaryTree();
        expect(test.root).toBeNull();
    });



    it('Can successfully instantiate a tree with a single root node', () => {
        let test = new BinaryTree();
        let root = test.root = new Node(5)
        expect(root.value).toEqual(5);
    });




    it('Can successfully add a left child and right child to a single root node', () => {
        let test = new BinaryTree();
        let root = test.root = new Node(5)
        let left = root.left = new Node(10)
        let right = root.right = new Node(8)
        expect(root.value).toEqual(5);
        expect(left.value).toEqual(10);
        expect(right.value).toEqual(8);
    });




    it('Can successfully return a collection from a preorder traversal', () => {
        let root = new Node(5);
        let left = root.left = new Node(10);
        let right = root.right = new Node(8);

        left.left = new Node(2);
        left.right = new Node(9);

        right.left = new Node(6);
        right.right = new Node(15);

        let test = new BinaryTree(root);

        expect(test.preOrder()).toEqual([5, 10, 2, 9, 8, 6, 15]);

    });





    it('Can successfully return a collection from an inorder traversal', () => {
        let test = new BinaryTree();
        let root = test.root = new Node(5);
        let left = root.left = new Node(10);
        let right = root.right = new Node(8);

        let leftOfLeft = left.left = new Node(2);
        let rightOfLeft = left.right = new Node(9);

        let leftOfRight = right.left = new Node(6);
        let rightOfRight = right.right = new Node(15);

        expect(test.inOrder()).toEqual([2, 10, 9, 5, 6, 8, 15]);

    });



    it('Can successfully return a collection from a postorder traversal', () => {
        let test = new BinaryTree();
        let root = test.root = new Node(5);
        let left = root.left = new Node(10);
        let right = root.right = new Node(8);

        let leftOfLeft = left.left = new Node(2);
        let rightOfLeft = left.right = new Node(9);

        let leftOfRight = right.left = new Node(6);
        let rightOfRight = right.right = new Node(15);

        expect(test.postOrder()).toEqual([2, 9, 10, 6, 15, 8, 5]);

    });


    it('TESTING BINARY SEARCH TREE, it can add to the tree correctly', () => {
        let test = new BinarySearchTree();

        test.add(50)
        test.add(45)
        test.add(90)

        test.add(49)
        test.add(42)

        test.add(100)
        test.add(80)

        expect(test.root.value).toEqual(50);
        expect(test.root.left.value).toEqual(45);
        expect(test.root.right.value).toEqual(90);
        expect(test.root.left.right.value).toEqual(49);
        expect(test.root.left.left.value).toEqual(42);
        expect(test.root.right.right.value).toEqual(100);
        expect(test.root.right.left.value).toEqual(80);
    });


    it('TESTING BINARY SEARCH TREE, contains method work properly', () => {
        let test = new BinarySearchTree();

        test.add(50)
        test.add(45)
        test.add(90)

        test.add(49)
        test.add(42)

        test.add(100)
        test.add(80)

        expect(test.contains(50)).toBeTruthy();
        expect(test.contains(45)).toBeTruthy();
        expect(test.contains(90)).toBeTruthy();
        expect(test.contains(49)).toBeTruthy();
        expect(test.contains(42)).toBeTruthy();
        expect(test.contains(100)).toBeTruthy();
        expect(test.contains(80)).toBeTruthy();

        expect(test.contains(20)).toBeFalsy();
        expect(test.contains(200)).toBeFalsy();
        expect(test.contains(40)).toBeFalsy();
        expect(test.contains(60)).toBeFalsy();

    });


    it('Edge Cases value already in the BST', () => {
        let test = new BinarySearchTree();

        test.add(50)
        test.add(45)
        test.add(90)


        let alreadyThereValue = test.add(90)
        expect(alreadyThereValue).toEqual('Value already in the BinarySearchTree');

    });



    it('Edge Cases, adding other than numbers to BST', () => {
        let test = new BinarySearchTree();

        let notAcceptedValue1 = test.add('NIHAD')

        let notAcceptedValue2 = test.add([5, 6])

        let notAcceptedValue3 = test.add({ Nihad: 'Nihad' })


        expect(notAcceptedValue1).toEqual('Only Numbers Can Added to this BinarySearchTree');
        expect(notAcceptedValue2).toEqual('Only Numbers Can Added to this BinarySearchTree');
        expect(notAcceptedValue3).toEqual('Only Numbers Can Added to this BinarySearchTree');

    });

    it('Check findMaximumValue Method for Binary Tree', () => {

        let root = new Node(50);
        let left = root.left = new Node(90);
        let right = root.right = new Node(70);

        let test = new BinaryTree(root);

        expect(test.findMaximumValue()).toEqual(90);

    });

    it('Check findMaximumValue Method for Binary Tree with more left and right sides', () => {

        let root = new Node(2);
        let left = root.left = new Node(5);
        let right = root.right = new Node(23);

        left.left = new Node(7);
        left.right = new Node(60);

        right.left = new Node(6);
        right.right = new Node(1);

        let newtest = new BinaryTree(root);

        expect(newtest.findMaximumValue()).toEqual(60);

    });


    it('Check findMaximumValue Method for empty Binary Tree', () => {
        let test = new BinaryTree();
        expect(test.findMaximumValue()).toEqual('Tree is Empty');

    });

    it('Check BreadthFirst Method for Binary Tree', () => {

        let root = new Node(50);
        let left = root.left = new Node(90);
        let right = root.right = new Node(70);

        let test = new BinaryTree(root);

        expect(test.breadthFirst()).toEqual([50, 90, 70]);

    });

    it('Check breadthFirst Method for Binary Tree with more left and right sides', () => {
        let root = new Node(2);
        let left = root.left = new Node(5);
        let right = root.right = new Node(23);

        left.left = new Node(7);
        left.right = new Node(60);

        right.left = new Node(6);
        right.right = new Node(1);

        let test = new BinaryTree(root);

        expect(test.breadthFirst()).toEqual([2, 5, 23, 7, 60, 6, 1]);

    });


    it('Check breadthFirst Method for Binary Tree with text data', () => {
        let root = new Node('A');
        let left = root.left = new Node('B');
        let right = root.right = new Node("C");

        left.left = new Node("D");
        left.right = new Node("E");

        right.left = new Node("F");
        right.right = new Node("G");

        let test = new BinaryTree(root);

        expect(test.breadthFirst()).toEqual(["A", "B", "C", "D", "E", "F", "G"]);

    });


    it('Check BreadthFirst Method for empty Binary Tree', () => {
        let test = new BinaryTree();
        expect(test.breadthFirst()).toEqual('Tree is Empty');

    });



})