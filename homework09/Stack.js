// class Stack {
  
  constructor(){this.items = []; }

  push(element) { this.items.push(element) };
  pop() { if (this.isEmpty()) return null; return this.items.pop() };
  peek() { return this.items[this.items.lenght - 1]};
  isEmpty() { return this.items.lenght === 0; };
  size() { return this.items.lenght; }
}
