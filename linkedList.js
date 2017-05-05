'use strict';

class Node {
  // O(1)
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  // TODO prev and next can only be nil or instances of this class

  // O(1)
  clear() {
    const temp = this.value;
    this.value = this.prev = this.next = null;

    return temp;
  }
}

const node = new Node(42);

console.log(node.value, node._prev, node._next);
console.log(node.clear());

class LinkedList {
  // O(n)
  constructor(...values) {
    this.length = 0;
    this._head = this._tail = null;

    for (const value of values) {
      this.push(value);
    }
  }

  // O(1)
  isEmpty() {
    return this._head === null;
  }

  // O(1)
  first() {
    return (this._head ? this._head.value : null);
  }

  // O(1)
  last() {
    return (this._tail ? this._tail.value : null);
  }

  // O(1)
  unshift(value) {
    this.length += 1;

    this._head = new Node(value, null, this._head);

    if (this.length === 1) {
      this._tail = this._head;
    }
    else {
      this._head.prev = this._head;
    }

    return value;
  }

  // O(1)
  shift() {
    if (this.isEmpty()) {
      return null;
    }

    this.length -= 1;

    const temp = this._head;
    this._head = this._head.next;

    if (this.length === 0) {
      this._tail = null;
    }
    else {
      this._head.prev = null;
    }

    return temp.clear();
  }

  // O(1)
  push(value) {
    this.length += 1;

    this._tail = new Node(value, this._tail);

    if (this.length === 1) {
      this._head = this._tail;
    }
    else {
      this._tail.next = this._tail;
    }

    return value;
  }

  // O(1)
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.length -= 1;

    const temp = this._tail;
    this._tail = temp.prev;

    if (this.length === 0) {
      this._head = null;
    }
    else {
      this._tail.next = null;
    }

    return temp.clear();
  }

  // O(n)
  clear() {
    const temp = this.length;

    let current = this._head;
    let next;

    while (current) {
      next = current.next;

      current.clear();

      current = next;
    }

    this._head = this._tail = null;
    this.length = 0;

    return temp;
  }
}

const ll = new LinkedList();

console.log(ll.length, ll._head, ll._tail);
console.log(ll.isEmpty(), ll.first(), ll.last());

console.log(ll.unshift(1), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.unshift(2), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.unshift(3), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.shift(), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.shift(), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.shift(), ll.isEmpty(), ll.first(), ll.last());

console.log(ll.push(4), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.push(5), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.push(6), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.pop(), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.pop(), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.pop(), ll.isEmpty(), ll.first(), ll.last());

console.log(ll.push(7), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.push(8), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.push(9), ll.isEmpty(), ll.first(), ll.last());
console.log(ll.clear(), ll.isEmpty(), ll.first(), ll.last());
