class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  // Create newNode
  // if root === null then root = newNode;
  // if you have a node with equal value you can just count it
  // let temp = this.root;
  // while loop
  //  if newNode === temp return undefined
  //  if < left else > right 
  //  if null insert newNode else move to next node 
  insert(value){
    const newNode = new treeNode(value);
    if(this.root === null){  // (pointer) root -> (null) 
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while(true){
      if (newNode.value === temp.value) return undefined;
      if(newNode.value < temp.value ){
        if(temp.left === null){
          temp.left = newNode;
          return this;
        }

        temp = temp.left;
      } else {
        if(temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  

  // if root == null then return false 
  //let temp = this.root;
  //while (temp)
  // if < left 
  // else if > right 
  // else = return true 
  //return false

  contains(value){
    if(this.root === null) return false
    let temp = this.root;

    while(temp){
      if (value < temp.value) {
        temp = temp.left;
      } else if(value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Breadth First Search 
  BFS(){
    let currentNode = this.root;
    let resutls = [];
    let queue = [];
    queue.push(currentNode);

    while(queue.lenght){
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    
    return results;
  }

  findMinValueNode(currentNode){
    while(currentNode.value !== null){
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  getRootNode(){
    return this.root;
  }

  // DFSInOrder
  inOrder(node = this.root, result = []){
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;    
  }

  // Depth first search DFS 
  preOrder(){
    let reuslts = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right)
    }
    traverse(this.root);
    return resutls;
  }


  // DFSPostOrder  
  postOrder(){
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }



}
