class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val){
    let newNode = new Node(val);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(this.length === 0){
      return undefined;
    }

    let current = this.head;
    let temp = current.next;
    while(temp != this.tail){
      current = temp;
      temp = temp.next;
    }
    this.tail = current;
    this.tail.next = null;
    this.length--;
    // return temp;
  }

  shift(){
    if(!this.head){
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  unshift(val){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index){
    if(index < 0 || index >= this.length){
      return null;
    }else{
      let searchedVal = this.head;
      for(let i = 0; i<index; i++){
        searchedVal = searchedVal.next;
      }
      return searchedVal;
    }
  }

  set(index, val){
    index = this.get(index);
    if(!index){
      return false;
    }else{
      index.val = val;
      return true;
    }
  }

  insert(index, val){
    if(index < 0 || index > this.length){
      return false;
    }else if(index === 0){
      this.unshift(val);
    }else if(index === this.length){
      return this.push(val);
    }else{
      val = new Node(val);
      let pre = this.get(index-1);
      let next = pre.next;
      
      pre.next = val;
      val.next = next;
      this.length++;
    }
    
    return true;
  }

  remove(index){
    if(index < 0 || index >=this.length){
      return false;
    }else if(index === 0){
      this.shift();
      return true;
    }else if(index === this.length - 1){
      this.pop();
      return true;
    }

    let pre = this.get(index - 1);
    let current = pre.next;
    pre.next = current.next;
    return true;
  }

  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for(let i = 0; i<this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

}

let a = new SinglyLinkedList();
a.push(10);
a.push(12);
a.push(13);
a.push(14);
a.push(15);
a.insert(2, 199);

console.log(a.get(2));
