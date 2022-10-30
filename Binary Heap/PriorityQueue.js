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

  Enqueue(val, priority){
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

  Dequeue(){
    this.swap(0, this.values.length - 1, this.values);
    let oldRoot = this.values.pop();
    this.sinkDown();
    

    return oldRoot;
  }
}

let queue = new PriorityQueue();

queue.Enqueue("cata", 11);
queue.Enqueue("asd", 12);
queue.Enqueue("qweq", 32);
queue.Enqueue("fsdfds", 41);
queue.Enqueue("opa", 9);
queue.Enqueue("ups", 1);

console.log(queue);
console.log(queue.Dequeue());
console.log(queue.Dequeue());
console.log(queue);