# Trees
Trees are non-leaner data structure that has the following:

 `Root` ---> the first node.
 <br />
 `K` ---> max # of children for each node.
 <br />
 `Leaf` ---> the last node (has no children).
 <br />
 `Edge` ---> the reference to other nodes (left/right).
 <br />
 `Height` ---> the total edges form the root down to the leaf.
 <br />
 `Siblings` ---> children of the same parent.
 <br />
 `Level` ---> number of layers in the Tree.

 ### You can Traverse the Nodes in BinaryTree or BinarySearchTree by:
 - Depth First:
    1. PreOrder ---> root/left/right
    2. InOrder  ---> left/root/right
    3. PostOrder ---> left/right/root

 - Breadth First (width): looping over the levels (layers)

 ### There are 3 main types of trees: 
 - BinaryTree --> k = 2 (only left and right)
 - BinarySearchTree  --> similar to BinaryTree but sorted (Left less than the root & Right always bigger than the root)
 - K-ary Tree  --> k = as much as you want.



## Challenge
  To make BinaryTree with `InOrder`, `PreOrder` and `PostOrder` methods.
  <br />
  To make BinarySearchTree with `add()` and `contains()` methods.

## Approach & Efficiency
 `InOrder`  --> T = O(n)  S = O(h)
 <br />
 `PreOrder` --> T = O(n)  S = O(h)
  <br />
 `PostOrder` --> T = O(n)  S = O(h)
  <br />
 `add()` --> T = O(log n)  S = O(1)
  <br />
 `contains()` --->  T = O(log n)  S = O(1)
  <br />

## API

BinaryTree:

 `InOrder`  --> To traverse the nodes and put the values in order of left/root/right in an array 
 <br />
 `PreOrder` --> To traverse the nodes and put the values in order of root/left/right in an array 
 <br />
 `PostOrder` --> To traverse the nodes and put the values in order of left/right/root in an array 

BinarySearchTree:

 `add()` ---> To add node to BinarySearchTree in the right spot (left less than root, right bigger than root)
 <br />
 `contains()` ---> To check if BinarySearchTree has a certain value or not and return boolean.
