"use strict";

const Graph = require("../javascript/code-challenges/Graph/graph.js").Graph;
const Vertex = require("../javascript/code-challenges/Graph/graph.js").Vertex;

describe("Testing Graph", () => {
  it("Node can be successfully added to the graph", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);

    expect(myGraph.add(zero)).toEqual(myGraph.adjacencyList.get(zero));
  });

  it("An edge can be successfully added to the graph", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const two = new Vertex(2);
    myGraph.add(zero);
    myGraph.add(two);

    myGraph.addDirectedEdge(zero, two);

    expect(myGraph.getNeighbors(zero)).toEqual(myGraph.adjacencyList.get(zero));
  });

  it("A collection of all nodes can be properly retrieved from the graph", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const two = new Vertex(2);
    const three = new Vertex(3);
    myGraph.add(zero);
    myGraph.add(two);
    myGraph.add(three);

    myGraph.addDirectedEdge(zero, two);
    myGraph.addDirectedEdge(two, three, 5);

    expect(myGraph.getNodes()).toEqual([
      { value: 0 },
      { vertex: { value: 2 }, weight: undefined },
      { value: 2 },
      { vertex: { value: 3 }, weight: 5 },
      { value: 3 },
    ]);
  });

  it("All appropriate neighbors can be retrieved from the graph", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const two = new Vertex(2);
    const three = new Vertex(3);

    myGraph.add(zero);
    myGraph.add(two);
    myGraph.add(three);
    myGraph.addDirectedEdge(zero, two);
    myGraph.addDirectedEdge(two, three);

    expect(myGraph.getNeighbors(two)).toEqual(myGraph.adjacencyList.get(two));
    expect(myGraph.getNeighbors(zero)).toEqual(myGraph.adjacencyList.get(zero));
  });

  it("Neighbors are returned with the weight between nodes included", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const two = new Vertex(2);

    myGraph.add(zero);
    myGraph.add(two);
    myGraph.addDirectedEdge(zero, two, 5);

    expect(myGraph.getNeighbors(zero)).toEqual(myGraph.adjacencyList.get(zero));
  });

  it("The proper size is returned, representing the number of nodes in the graph", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);

    myGraph.add(zero);
    myGraph.add(two);
    myGraph.add(three);
    myGraph.add(four);

    myGraph.addDirectedEdge(zero, two, 5);

    expect(myGraph.size()).toEqual(4);
  });

  it("A graph with only one node and edge can be properly returned", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const two = new Vertex(2);

    myGraph.add(zero);
    myGraph.add(two);

    myGraph.addDirectedEdge(zero, two, 5);

    expect(myGraph.getNodes()).toEqual([
      { value: 0 },
      { vertex: { value: 2 }, weight: 5 },
      { value: 2 },
    ]);
  });

  it("An empty graph properly returns null", () => {
    const myGraph = new Graph();

    expect(myGraph.getNodes()).toEqual(null);
  });
});
