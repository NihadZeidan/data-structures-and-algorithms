"use strict";

const treeIntersection = require("../javascript/code-challenges/treeIntersection/tree-intersection.js");
const tree = require("../javascript/code-challenges/tree/tree.js");

describe("Testing Tree-Intersection", () => {
  it("should pass", () => {
    let root = new tree.Node(5);
    const myFTree = new tree.BinaryTree(root);
    root.left = new tree.Node(8);
    root.right = new tree.Node(9);
    root.right.left = new tree.Node(20);

    let root2 = new tree.Node(5);
    const mySTree = new tree.BinaryTree(root2);
    root2.left = new tree.Node(8);
    root2.right = new tree.Node(9);
    root2.right.left = new tree.Node(20);

    let test = treeIntersection(myFTree, mySTree);

    expect(test).toEqual([8, 5, 20, 9]);
  });

  it("change the root in first tree", () => {
    let root = new tree.Node(50);
    const myFTree = new tree.BinaryTree(root);
    root.left = new tree.Node(8);
    root.right = new tree.Node(9);
    root.right.left = new tree.Node(20);

    let root2 = new tree.Node(5);
    const mySTree = new tree.BinaryTree(root2);
    root2.left = new tree.Node(8);
    root2.right = new tree.Node(9);
    root2.right.left = new tree.Node(20);

    let test = treeIntersection(myFTree, mySTree);

    expect(test).toEqual([8, 20, 9]);
  });

  it("change one side in one of the trees", () => {
    let root = new tree.Node(5);
    const myFTree = new tree.BinaryTree(root);
    root.left = new tree.Node(8);
    root.right = new tree.Node(9);
    root.right.left = new tree.Node(20);

    let root2 = new tree.Node(5);
    const mySTree = new tree.BinaryTree(root2);
    root2.left = new tree.Node(8);
    root2.right = new tree.Node(9);
    root2.right.left = new tree.Node(80);

    let test = treeIntersection(myFTree, mySTree);

    expect(test).toEqual([8, 5, 9]);
  });

  it("return one value", () => {
    let root = new tree.Node(5);
    const myFTree = new tree.BinaryTree(root);
    root.left = new tree.Node(8);
    root.right = new tree.Node(9);
    root.right.left = new tree.Node(20);

    let root2 = new tree.Node(5);
    const mySTree = new tree.BinaryTree(root2);
    root2.left = new tree.Node(80);
    root2.right = new tree.Node(99);
    root2.right.left = new tree.Node(850);

    let test = treeIntersection(myFTree, mySTree);

    expect(test).toEqual([5]);
  });

  it("it works with nonNumbers", () => {
    let root = new tree.Node("N");
    const myFTree = new tree.BinaryTree(root);
    root.left = new tree.Node("X");
    root.right = new tree.Node("P");
    root.right.left = new tree.Node("K");

    let root2 = new tree.Node("N");
    const mySTree = new tree.BinaryTree(root2);
    root2.left = new tree.Node("X");
    root2.right = new tree.Node("P");
    root2.right.left = new tree.Node("K");

    let test = treeIntersection(myFTree, mySTree);

    expect(test).toEqual(["X", "N", "K", "P"]);
  });
});
