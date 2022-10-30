class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }

  swap(i, j, data){
    let aux = data[i];
    data[i]  = data[j];
    data[j] = aux;
  }

  insert(val){
    this.values.push(val);

    let index = this.values.length - 1;

    while(index > 0){
      let parentIndex = Math.floor((index - 1) / 2);
      if(this.values[index] <= this.values[parentIndex]){
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
        leftChild = this.values[leftChildIdx];
        if(leftChild > element){
          swap = leftChildIdx;
        }
        if(rightChildIdx < length){
          rightChild = this.values[rightChildIdx];
          if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
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

  extractMax(){
    this.swap(0, this.values.length - 1, this.values);
    let oldRoot = this.values.pop();
    this.sinkDown();
    

    return oldRoot;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(33);
heap.insert(41);
heap.insert(39);
heap.insert(27);
heap.insert(12);
heap.insert(18);
heap.insert(55);
heap.insert(1);


console.log(heap.extractMax());
console.log(heap);
heap.insert(100);
console.log(heap);