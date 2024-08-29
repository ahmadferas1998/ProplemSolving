class NODE {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeElement = function (head, index) {
  let dummy = new Node(-1, head);
  let current = head;
  let prev = dummy;
  let count = 0;
  while(current){
    if(current.val==index) {
        prev.next=current.next
        current=current.next

    }
  }
};
