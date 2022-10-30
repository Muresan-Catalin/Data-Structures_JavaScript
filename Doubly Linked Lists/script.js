class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    val = new Node(val);
    this.length++;
    if(!this.head){
      this.head = val;
      this.tail = val;
      return true;
    }
    this.tail.next = val;
    val.prev = this.tail;
    this.tail = val;
    return true;

  }

  pop(){
    if(!this.tail){
      return false;
    }else if(this.length === 1){
      this.tail = null;
      this.head = null;
      this.length--;
      return true;
    }else{
      let oldTail = this.tail;
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
      this.length--;
      return oldTail;
    }
  }

  shift(){
    if(!this.head){
      return null;
    }
    if(this.length === 1){
      this.tail = null;
      this.head = null;
      this.length--;
      return true;
    }

    let oldHead = this.head;
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshift(val){
    val = new Node(val);
    this.length++;
    if(!this.head){
      this.head = val;
      this.tail = val;
      return true;
    }else{
      this.head.prev = val;
      val.next = this.head;
      this.head = val;
      return true;
    }
  }

  get(index){
    if(index < 0 || index >= this.length){
      return false;
    }
    if(index <= this.length / 2){
      let current = this.head;
      let i = 1;
      while(i <= index){
        current = current.next;
        i++;
      }

      return current;
    }else{
      let current = this.tail;
      let i = this.length - 1;
      while(i > index){
        current = current.prev;
        i--;
      }

      return current;
    }
  }

  set(index, val){
    let newNode = this.get(index);
    if(!newNode){
      return false;
    }
    newNode.val = val;
    return true;
  }

  insert(index, val){
    if(index < 0 || index > this.length){
      return false;
    }

    if(index === 0){
      this.unshift(val);
      return true;
    }else if(index === this.length){
      this.push(val);
      return true;
    }
    val = new Node(val);
    let searchedNode = this.get(index-1);
    let next = searchedNode.next;
    searchedNode.next = val;
    val.prev = searchedNode;
    val.next = next;
    next.prev = val;
    this.length++;
    return true;
  }

  remove(index){
    if(index < 0 || index >= this.length){
      return false;
    }

    if(index === 0){
      this.shift();
      return true;
    }

    if(index === this.length - 1){
      this.pop();
      return true;
    }

    let removed = this.get(index);
    let preNode = removed.prev;
    let nextNode = removed.next;
    preNode.next = nextNode;
    nextNode.prev = preNode;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
}

let a = new DoublyLinkedList();

a.push(10);
a.push(11);
a.push(12);
a.push(13);
a.push(14);
a.push(15);
a.push(16);
a.push(17);
a.push(18);

console.log(a);

