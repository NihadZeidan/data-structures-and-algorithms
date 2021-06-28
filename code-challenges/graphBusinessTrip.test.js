const businessTrip = require("../javascript/code-challenges/graghBusinessTrip/graphBusinessTrip");
const Graph = require("../javascript/code-challenges/Graph/graph.js").Graph;
const Vertex = require("../javascript/code-challenges/Graph/graph.js").Vertex;

describe("test Business Trip Function", () => {
  it("it should work with full trip", () => {
    const myGraph = new Graph();
    const zero = new Vertex("zarqa");
    const two = new Vertex("Amman");
    const three = new Vertex("irbid");
    const four = new Vertex("jarash");
    let trips = ["zarqa", "Amman", "irbid", "jarash"];

    myGraph.add(zero);
    myGraph.add(two);
    myGraph.add(three);
    myGraph.add(four);

    myGraph.addDirectedEdge(zero, two, 100);
    myGraph.addDirectedEdge(two, three, 50);
    myGraph.addDirectedEdge(three, four, 20);

    expect(businessTrip(myGraph, trips)).toEqual(`True, Cost: 170$`);
  });
  it("it should work two out of four places ", () => {
    const myGraph = new Graph();
    const zero = new Vertex("zarqa");
    const two = new Vertex("Amman");
    const three = new Vertex("irbid");
    const four = new Vertex("jarash");
    let trips = ["Amman", "irbid"];

    myGraph.add(zero);
    myGraph.add(two);
    myGraph.add(three);
    myGraph.add(four);

    myGraph.addDirectedEdge(zero, two, 100);
    myGraph.addDirectedEdge(two, three, 50);
    myGraph.addDirectedEdge(three, four, 20);

    expect(businessTrip(myGraph, trips)).toEqual(`True, Cost: 50$`);
  });
  it("it should work with three out of four places", () => {
    const myGraph = new Graph();
    const zero = new Vertex("zarqa");
    const two = new Vertex("Amman");
    const three = new Vertex("irbid");
    const four = new Vertex("jarash");
    let trips = ["Amman", "irbid", "jarash"];

    myGraph.add(zero);
    myGraph.add(two);
    myGraph.add(three);
    myGraph.add(four);

    myGraph.addDirectedEdge(zero, two, 100);
    myGraph.addDirectedEdge(two, three, 50);
    myGraph.addDirectedEdge(three, four, 20);

    expect(businessTrip(myGraph, trips)).toEqual(`True, Cost: 70$`);
  });
});
