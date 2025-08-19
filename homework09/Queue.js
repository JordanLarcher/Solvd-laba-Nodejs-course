// FIFO (First-in, First-Out)
// TimeComplexity: Enqueue O(1), Dequeue O(n), 
class Queue{ 
  
  constructor(){this.items = []; }

  enqueue(element) { this.items.push(element) };
  dequeue() { return this.items.shift(); };
  peek() { return this.items[0]};
  isEmpty() { return this.items.lenght === 0; };
  size() { return this.items.lenght; }
}
