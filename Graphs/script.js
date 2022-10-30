class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(val){
    this.adjacencyList[val] = [];
  }

  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(v1, v2){
    let index = this.adjacencyList[v1].indexOf(v2);
    this.adjacencyList[v1].splice(index, 1);
    
    index = this.adjacencyList[v2].indexOf(v1);
    this.adjacencyList[v2].splice(index, 1);
  }

  removeVertex(val){
    while(this.adjacencyList[val].length){
      const adjacentVertex = this.adjacencyList[val].pop();
      this.removeEdge(val, adjacentVertex);
    }
    
    delete this.adjacencyList[val];
  }


  DFSRecursive(vertex){
    let results = [];
    let visited = {};

    const DFS = (v) =>{
      if(!v){
        return null;
      }

      visited[v] = true;
      results.push(v);

      this.adjacencyList[v].forEach(element => {
        if(visited[element] != true){
          DFS(element);
        }
      });
    }
    DFS(vertex);
    return results;
  }

  BFS(vertex){
    let queue = [];
    let results = [];
    let visited = {};
    let currentVertex;

    visited[vertex] = true;
    queue.push(vertex);

    while(queue.length > 0){
      currentVertex = queue.shift();
      results.push(currentVertex);
      
      this.adjacencyList[currentVertex].forEach(element => {
        if(visited[element] != true){
          visited[element] = true;
          queue.push(element);
        }
      })
    }

    return results;
  }
}

let g = new Graph;

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);
console.log(g.DFSRecursive("A"));
console.log(g.BFS("A"));
