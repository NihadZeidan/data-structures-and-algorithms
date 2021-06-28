"use strict";

let Queue = require("../stacksAndQueues/stacks-and-queues.js").Queue;

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

  breadthFirst(vertex) {
    let list = new Array();
    let queue = new Queue();
    let visited = new Set();

    queue.enqueue(vertex);
    visited.add(vertex);

    while (!queue.isEmpty()) {
      let front = queue.dequeue();
      list.push(front.value);

      let value = this.getNeighbors(front);

      for (let neighbor of value) {
        if (!visited.has(neighbor.vertex)) {
          visited.add(neighbor.vertex);
          queue.enqueue(neighbor.vertex);
        }
      }
    }
    return list;
  }
}




module.exports = { Graph, Vertex };
