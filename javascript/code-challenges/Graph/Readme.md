# Graphs

A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges

## Challenge

To implement Graph from scratch with basic methods

## Approach & Efficiency

[Function](./graph.js);

[Testing Unit](../../../code-challenges/graph.test.js)

## API

`add(value)` ---> Returns: The added node and Add a node to the graph.

`addEdge(start, end, weight)` ---> Returns: nothing, and Adds a new edge between two nodes in the graph If specified, assign a weight to the edge

`getNodes` ---> Returns all of the nodes in the graph as a collection (set, list, or similar)

`getNeighbors` ---> Returns a collection of edges connected to the given node, Include the weight of the connection in the returned collection.

`size` ---> Returns the total number of nodes in the graph.
