'use strict';

class Node {
  // O(1)
  constructor(value, prev = null, next = null) {
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
      this._head.next.prev = this._head;
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
      this._tail.prev.next = this._tail;
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

  *[Symbol.iterator]() {
    let current = this._head;

    while (current) {
      yield current.value;

      current = current.next;
    }
  }

  // O(n)
  toArray() {
    const array = [];

    for (const value of this) {
      array.push(value);
    }

    return array;
  }

  // O(n)
  toString() {
    const separator = ', ';

    let string = '( ';

    for (const value of this) {
      string += value;

      if (value !== this.last()) {
        string += separator;
      }
    }

    string += ' )';

    return string;
  }

  // O(n)
  findIndex(needle) {
    let index = 0;

    for (const value of this) {
      if (value === needle) {
        return index;
      }

      index += 1;
    }

    return undefined;
  }

  // O(n)
  get(key) {
    if (key < 0 || key >= this.length) {
      return undefined;
    }

    let index = 0;

    for (const value of this) {
      if (key === index) {
        return value;
      }

      index += 1;
    }
  }

  // O(n)
  set(key, value) {
    if (key < 0 || key >= this.length) {
      return undefined;
    }

    let current = this._head;
    let index = 0;

    while (current) {
      if (key === index) {
        return current.value = value;
      }

      current = current.next;
      index += 1;
    }
  }

  // O(n)
  insert(key, value) {
    if (key < 0 || key > this.length) {
      return undefined;
    }

    if (key === 0) {
      return this.unshift(value);
    }
    else if (key === this.length) {
      return this.push(value);
    }

    this.length += 1;

    let current = this._head;
    let index = 0;

    while (current) {
      if (key === index) {
        const next = current;
        const prev = next.prev;

        prev.next = new Node(value, prev, next);

        return value;
      }

      current = current.next;
      index += 1;
    }
  }

  // O(n)
  delete(key) {
    if (key < 0 || key >= this.length) {
      return undefined;
    }

    if (key === 0) {
      return this.shift();
    }
    else if (key === this.length - 1) {
      return this.pop();
    }

    this.length -= 1;

    let current = this._head;
    let index = 0;

    while (current) {
      if (key === index) {
        const prev = current.prev;
        const next = current.next;

        prev.next = next;
        next.prev = prev;

        return current.clear();
      }

      current = current.next;
      index += 1;
    }
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

console.log(ll.push(7));
console.log(ll.push(8));
console.log(ll.push(9));
console.log(ll.clear(), ll.isEmpty(), ll.first(), ll.last());

ll.push(10)
ll.push(11)
ll.push(12)

console.log(ll.isEmpty(), ll.first(), ll.last());

for (const value of ll) {
  console.log(value);
}

console.log(ll.toArray());
console.log(ll.toString());

console.log(ll.findIndex(9));
console.log(ll.findIndex(10));
console.log(ll.findIndex(11));
console.log(ll.findIndex(12));
console.log(ll.findIndex(13));

console.log(ll.get(-1));
console.log(ll.get(0));
console.log(ll.get(1));
console.log(ll.get(2));
console.log(ll.get(3));

console.log(ll.set(-1, 19));
console.log(ll.set(0, 20));
console.log(ll.set(1, 21));
console.log(ll.set(2, 22));
console.log(ll.set(3, 23));

console.log(ll.toString());

console.log(ll.insert(-1, 29));
console.log(ll.toString());

console.log(ll.insert(0, 30));
console.log(ll.toString());

console.log(ll.insert(1, 31));
console.log(ll.toString());

console.log(ll.insert(ll.length - 2, 32));
console.log(ll.toString());

console.log(ll.insert(ll.length - 1, 33));
console.log(ll.toString());

console.log(ll.insert(ll.length, 34));
console.log(ll.toString());

console.log(ll.insert(ll.length + 1, 35));
console.log(ll.toString());

console.log(ll.delete(ll.length));
console.log(ll.toString());

console.log(ll.delete(ll.length - 1));
console.log(ll.toString());

console.log(ll.delete(1));
console.log(ll.toString());

console.log(ll.delete(0));
console.log(ll.toString());

console.log(ll.delete(-1));
console.log(ll.toString());
