"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  add(vertex) {
    this.adjacencyList.set(vertex, []);

    return this.adjacencyList.get(vertex);
  }

  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) return;

    let startingPoint = this.adjacencyList.get(start);
    startingPoint.push(new Edge(end, weight));
  }

  getNodes() {
    let everyThing = this.adjacencyList.entries();
    let result = [];
    for (const [key, value] of everyThing) {
      result.push(key, ...value);
    }
    if (result[0]) {
      return result;
    } else {
      return null;
    }
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }
}

module.exports = { Graph, Vertex };

// console.log(myGraph);
