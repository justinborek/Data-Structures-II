class GraphNode {
  constructor({
    value,
    edges,
  }) {
    this._value = value;
    this._edges = edges;
  }

  get value() {
    return this._value;
  }

  get edges() {
    return this._edges;
  }

  get numberOfEdges() {
    return this._edges.length;
  }

  set edges(x) {
    this._edges = x;
  }

  pushToEdges(y) {
    this._edges.push(y);
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
 /*
  addVertex(value, edges = []) {
    if (this.vertices.length === 0) {
      this.vertices.push(
        new GraphNode({
          value,
          edges,
        })
      );
    } else {
      this.vertices.push(
        new GraphNode({
          value,
          edges,
        })
      );
      const i = this.vertices.length;
      this.vertices[i - 2].edges.push(this.vertices[i - 1].value);
      this.vertices[i - 1].edges.push(this.vertices[i - 2].value);
      if (edges.length > 0) {
        for (let j = 0; j < this.vertices.length; j++) {
          if (this.vertices[j].value === edges) {
            this.vertices[j].edges[0].push(value);
          }
        }
      }
    }
  }
*/
addVertex(value, edges = []) {
  
};
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) {
        return true;
      }
      return false;
    }
    // console.log(Graph);
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].edges.includes(value)) {
        this.vertices[i].edges = this.vertices[i].edges.filter(x => x !== value);
      }
      if (this.vertices[i].value === value) {
        this.vertices.splice(i, 1);
      }
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {

  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {

  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {

  }
}

const graph = new Graph();

graph.addVertex('Hello World!');
console.log(graph.contains('Hello World!'));//.toBe(true);
graph.addVertex('hi there');
graph.removeVertex('hi there');
console.log(graph.contains('hi there'));//.toBe(false);
const pineapple = graph.addVertex('pineapple');
console.log(graph);
const banana = graph.addVertex('banana');

console.log(graph.checkIfEdgeExists(pineapple, banana));//.toBe(true);

// const pineapple = graph.addVertex('pineapple');
// const banana = graph.addVertex('banana');
const mango = graph.addVertex('mango', [pineapple]);
console.log(graph.checkIfEdgeExists(pineapple, banana));//.toBe(true);
console.log(graph.checkIfEdgeExists(mango, banana));//.toBe(false);
console.log(graph.checkIfEdgeExists(mango, pineapple));//.toBe(true);
const monkey = graph.addVertex('monkey');
const human = graph.addVertex('human');
const crocodile = graph.addVertex('crocodile', [human]);
graph.addEdge(crocodile, monkey);
graph.removeEdge(monkey, human);
console.log(graph.checkIfEdgeExists(monkey, human));//.toBe(false);
const A = graph.addVertex('A');
const b = graph.addVertex('b');
console.log(graph.checkIfEdgeExists(A, b));//.toBe(true);
graph.removeEdge(A, b);
console.log(graph.checkIfEdgeExists(A, b));//.toBe(false);
console.log(graph.contains('A') || graph.contains('b'));//.toBe(false);