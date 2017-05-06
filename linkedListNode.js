'use strict';

class LinkedListNode {
  // O(1)
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  // TODO prev and next can only be null or instances of this class

  // O(1)
  clear() {
    const temp = this.value;

    this.value = this.prev = this.next = null;

    return temp;
  }
}

module.exports = LinkedListNode;
