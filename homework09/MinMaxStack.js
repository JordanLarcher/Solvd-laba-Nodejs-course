class MinMaxStack{
  constructor(){
    this.stack=[];
    this.minStack =[];
    this.maxStack = [];
  }


  push(value){
    this.stack.push(value);
    if (!this.minStack.length || value <= this.getMin()) {
      this.minStack.push(value);
    }
    if (!this.maxStack.length || value >= this.getMax()) {
      this.maxStack.push(value);
    }

  }

  pop(){
    const value = this.stack.pop();

    if (value === this.getMin()) this.minStack.pop();
    if (value === this.getMax()) this.maxStack.pop();
    return value;
  }

  getMin(){
    return this.minStack[this.minStack.length - 1];
  }
  getMax(){
    return this.maxStack[this.maxStack.length -1];
  }

}


/**
 * Check if the Binary Tree is a BST
 * Time Complexity: O(n)
 */

function isBST(node, min = -Infinity, max = Infinity){
  if(!node) return true;
  if(node.value <= min || node.value >= max) return false;
  return(
    isBST(node.left, min, node.value) && isBST(node.right, max, node.value)
  );
}

/**
 * Graph Algorithm: Dijkstra's Algorithm
 */
function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const pq = new Map();

    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.set(start, 0);

    while (pq.size) {
        let [current] = [...pq.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));
        pq.delete(current);
        visited.add(current);

        for (let neighbor in graph[current]) {
            let distance = graph[current][neighbor];
            let newDist = distances[current] + distance;

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.set(neighbor, newDist);
            }
        }
    }

    return distances;
}

/**
 * Linked List Cycle Detection (Floyd’s Algorithm)
 * Time Complexity: O(n), Space: O(1)
 */
function hasCycle(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

/**
 * ============================================
 * PART 3: Demonstration
 * ============================================
 */

function demo() {
    console.log("=== STACK ===");
    const stack = new Stack();
    stack.push(10); stack.push(20); stack.push(30);
    console.log(stack.pop()); // 30
    console.log(stack.peek()); // 20

    console.log("=== QUEUE ===");
    const queue = new Queue();
    queue.enqueue(1); queue.enqueue(2); queue.enqueue(3);
    console.log(queue.dequeue()); // 1
    console.log(queue.peek()); // 2

    console.log("=== BINARY TREE ===");
    const tree = new BinaryTree();
    tree.insert(10); tree.insert(20); tree.insert(30);
    console.log(tree.inOrder()); // [20, 10, 30]

    console.log("=== GRAPH ===");
    const graph = new Graph();
    graph.addVertex("A"); graph.addVertex("B"); graph.addVertex("C");
    graph.addEdge("A", "B"); graph.addEdge("A", "C");
    console.log(graph.DFS("A")); // [A, B, C]
    console.log(graph.BFS("A")); // [A, B, C]

    console.log("=== LINKED LIST ===");
    const list = new LinkedList();
    list.insert(1); list.insert(2); list.insert(3);
    console.log(list.search(2)); // true
    list.delete(2);
    console.log(list.search(2)); // false

    console.log("=== MIN/MAX STACK ===");
    const mmStack = new MinMaxStack();
    mmStack.push(5); mmStack.push(1); mmStack.push(10);
    console.log(mmStack.getMin()); // 1
    console.log(mmStack.getMax()); // 10

    console.log("=== CHECK BST ===");
    const bstTree = new TreeNode(10);
    bstTree.left = new TreeNode(5);
    bstTree.right = new TreeNode(15);
    console.log(isBST(bstTree)); // true

    console.log("=== DIJKSTRA ===");
    const weightedGraph = {
        A: { B: 2, C: 4 },
        B: { C: 1, D: 7 },
        C: { D: 3 },
        D: {}
    };
    console.log(dijkstra(weightedGraph, "A"));
    // { A: 0, B: 2, C: 3, D: 6 }

    console.log("=== LINKED LIST CYCLE DETECTION ===");
    const cycleList = new ListNode(1);
    cycleList.next = new ListNode(2);
    cycleList.next.next = new ListNode(3);
    cycleList.next.next.next = cycleList; // create cycle
    console.log(hasCycle(cycleList)); // true
}

demo();

