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

  depthFirst(vertex, visited = new Set()) {
    visited.add(vertex);

    const destinations = this.adjacencyList.get(vertex);

    for (const destination of destinations) {
      if (!visited.has(destination.vertex)) {
        this.depthFirst(destination.vertex, visited);
      }
    }

    let result = [...visited];
    let final = [];
    for (let vert of result) {
      final.push(vert.value);
    }

    return final;
  }
}

module.exports = { Graph, Vertex };

// function fromMatrixToList(matrix) {
//   const adjacencyList = new Map();
//   for (let i = 0; i < matrix.length; i++) {
//     if (!adjacencyList.has(matrix[i][0]) && matrix[i][0] !== "#") {
//       adjacencyList.set(matrix[i][0], []);
//     }

//     for (let y = 0; y < matrix[i].length; y++) {
//       if (matrix[i][y] == 1) {
//         let myPoint = adjacencyList.get(matrix[i][0]);
//         myPoint.push(matrix[0][y]);
//       }
//     }
//   }
//   return adjacencyList;
// }

// // | a b c d e
// // a| 0 1 0 0 1
// // b| 1 0 1 1 0
// // c| 0 1 0 1 0
// // d| 0 1 1 0 1
// // e| 1 0 0 1 0

// // Input
// let matrix = [
//   ["#", "a", "b", "c", "d", "e"],
//   ["a", 0, 1, 0, 0, 1],
//   ["b", 1, 0, 1, 1, 0],
//   ["c", 0, 1, 0, 1, 0],
//   ["d", 0, 1, 1, 0, 1],
//   ["e", 1, 0, 0, 1, 0],
// ];

// console.log(fromMatrixToList(matrix));
// OutPut -->

// Map {
//   'a' => [ 'b', 'e' ],
//   'b' => [ 'a', 'c', 'd' ],
//   'c' => [ 'b', 'd' ],
//   'd' => [ 'b', 'c', 'e' ],
//   'e' => [ 'a', 'd' ]
// }
