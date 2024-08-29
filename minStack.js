class Stack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(ele) {
      this.stack.push(ele);
      if (this.minStack.length === 0 || ele <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(ele);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return null;
      }
      const poppedElement = this.stack.pop();
      if (poppedElement === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return poppedElement;
    }
  
    getTop() {
      if (this.stack.length === 0) {
        return null;
      }
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  const sta = new Stack();
  
  sta.push(1);
  sta.push(15);
  sta.push(12);
  sta.push(6);
  
  console.log(sta.getMin()); // Should print 1
  console.log(sta.getTop()); // Should print 6
  