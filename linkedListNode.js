'use strict';

class LinkedListNode {
  // O(1)
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  // O(1)
  clear() {
    const temp = this.value;

    this.value = this.prev = this.next = null;

    return temp;
  }
}

module.exports = LinkedListNode;
