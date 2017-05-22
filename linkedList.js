/* eslint-disable no-undefined */
'use strict';

const Node = require('./linkedListNode');

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
    return this.length === 0;
  }

  // O(1)
  first() {
    return (this._head ? this._head.value : undefined);
  }

  // O(1)
  last() {
    return (this._tail ? this._tail.value : undefined);
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
      return undefined;
    }

    this.length -= 1;

    const temp = this._head;

    this._head = this._head.next;

    if (this.isEmpty()) {
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
      return undefined;
    }

    this.length -= 1;

    const temp = this._tail;

    this._tail = temp.prev;

    if (this.isEmpty()) {
      this._head = null;
    }
    else {
      this._tail.next = null;
    }

    return temp.clear();
  }

  // O(n)
  clear() {
    if (this.isEmpty()) {
      return 0;
    }

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

  * [Symbol.iterator]() {
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

    let string = '';

    for (const value of this) {
      string += value;

      if (value !== this.last()) {
        string += separator;
      }
    }

    return string;
  }

  // O(n)
  search(needle) {
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
        current.value = value;

        return value;
      }

      current = current.next;
      index += 1;
    }
  }

  // O(n)
  // eslint-disable-next-line max-statements
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
  // eslint-disable-next-line max-statements
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

module.exports = LinkedList;
