class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue{
  constructor(){
    this.values = [];
  }

  swap(i, j, data){
    let aux = data[i];
    data[i]  = data[j];
    data[j] = aux;
  }

  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;

    while(index > 0){
      let parentIndex = Math.floor((index - 1) / 2);
      if(this.values[index].priority >= this.values[parentIndex].priority){
        break;
      }
      this.swap(index, parentIndex, this.values);
      index = parentIndex;
    }

    return this;
  }

  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx].priority;
        if(leftChild < element.priority){
          swap = leftChildIdx;
        }
        if(rightChildIdx < length){
          rightChild = this.values[rightChildIdx].priority;
          if(
            (swap === null && rightChild < element.priority) || 
            (swap !== null && rightChild < leftChild)
            ){
            swap = rightChildIdx;
          }
        }
      }

      if(swap === null){
        break;
      }
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  dequeue(){
    this.swap(0, this.values.length - 1, this.values);
    let oldRoot = this.values.pop();
    this.sinkDown();
    

    return oldRoot;
  }
}

class WeightedGraph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight){
    this.adjacencyList[v1].push({node:v2, weight});
    this.adjacencyList[v2].push({node:v1, weight});
  }

  shortestPath(start, finish){
    const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}


let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.shortestPath("A", "E"));
