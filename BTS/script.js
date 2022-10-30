class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  insert(val){
    let newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
    }else{
      let current = this.root;
      
      while(true){
        if(newNode.val > current.val){
          if(current.right === null){
            current.right = newNode;
            break;
          }else{
            current = current.right;
          }  
        }
        
        else{
          if(current.left === null){
            current.left = newNode;
            break;
          }else{
            current = current.left;
          }
        }
      }
    }
    return this;
  }

  find(val){
    if(!this.root){
      return false;
    }
    
    let current = this.root;

    while(current){
      if(current.val === val){
        return true;
      }
      if(val > current.val){
        current = current.right;
      }else{
        current = current.left;
      }
    }

    return false;
  }

  //// TRAVERSAL OF A TREE ////

  BreadthFirstSearch(){
    let data = [], queue = [], node = this.root;
    queue.push(node);

    while(queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
    return data;
  }

  PreOrderDFS(){
    let data = [], current = this.root;

    const helper = (node) =>{
      data.push(node.val);
      
      if(node.left){
        helper(node.left);
      }
      if(node.right){
        helper(node.right);
      }
    }

    helper(current);
    return data;
  }

  PostOrderDFS(){
    let data = [], current = this.root;

    const helper = (node) =>{

      if(node.left){
        helper(node.left);
      }
      if(node.right){
        helper(node.right);
      }
      
      data.push(node.val);
    }

    helper(current);
    return data;
  }

  InOrderDFS(){
    let data = [], current = this.root;

    const helper = (node) =>{

      if(node.left){
        helper(node.left);
      }
      data.push(node.val);
      if(node.right){
        helper(node.right);
      }
      
    }

    helper(current);
    return data;
  }
}

let tree = new BST();
tree.insert(10); // root
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

console.log(tree.PreOrderDFS());
console.log(tree.PostOrderDFS());
console.log(tree.InOrderDFS());
