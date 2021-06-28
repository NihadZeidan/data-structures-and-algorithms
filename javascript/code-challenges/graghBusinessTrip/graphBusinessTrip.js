function businessTrip(graph, array) {
  let tripCost = 0;
  let feasible = true;
  let values = graph.adjacencyList.entries();

  let arrayOFValues = [...values];

  let filtered = arrayOFValues.filter((place) => {
    if (array.includes(place[0].value)) {
      return place;
    }
  });

  for (let i = 0; i < filtered.length - 1; i++) {
    if (array[i] === filtered[i][0].value) {
      tripCost += filtered[i][1][0].weight;
    } else {
      feasible = false;
    }
  }

  if (feasible) {
    return `True, Cost: ${tripCost}$`;
  } else {
    return `False`;
  }
}

module.exports = businessTrip;
