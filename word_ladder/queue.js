export default class Queue {
    constructor() {
      this.elements = [];
    }
  
    push(element) {
      this.elements.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.elements.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.elements[0];
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  
    size() {
      return this.elements.length;
    }
  
    toString() {
      return this.elements.toString();
    }
  
    getElements() {
      return this.elements;
    }
  }
  