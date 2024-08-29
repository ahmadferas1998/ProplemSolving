class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0; // Initialize size to 0
    }
  
    addFirst(data) {
      this.head = new Node(data, this.head);
      this.size++;
    }
  
    addLast(data) {
      let newNode = new Node(data);
      let current;
      if (!this.head) {
        this.head = newNode;
      } else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    getall() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    addindex(data, index) {
      if (index < 0 || index > this.size) return;
  
      let newNode = new Node(data);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let prev = null;
        let count = 0;
  
        while (count < index) {
          prev = current;
          current = current.next;
          count++;
        }
  
        prev.next = newNode;
        newNode.next = current;
      }
  
      this.size++;
    }

    removeatindex(index) {
        if (index < 0 || index >= this.size) return;
        let current = this.head;
        let prev = null;
        let count = 0;
    
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
        }
        this.size--;
    }
  }
  const li = new LinkedList();
  li.addFirst(10);
  li.addFirst(20);
  li.addLast(30);
  li.addindex(50, 2);
  li.removeatindex(2);
  console.log(li);
  li.getall();
  