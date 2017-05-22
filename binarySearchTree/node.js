'use strict';

class Node {
  // O(1)
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  // O(n)
  toString() {
    const result = [];

    if (this.left) {
      result.push(this.left.toString());
    }

    if (this.key) {
      result.push(this.key);
    }

    if (this.right) {
      result.push(this.right.toString());
    }

    return result.join(' ');
  }

  // Average: O(log n)
  // Worst: O(n)
  insert(value) {
    if (value === this.key) {
      return;
    }

    if (value < this.key) {
      if (this.left) {
        return this.left.insert(value);
      }

      this.left = new Node(value);

      return value;
    }

    if (this.right) {
      return this.right.insert(value);
    }

    this.right = new Node(value);

    return value;
  }

  // Average: O(log n)
  // Worst: O(n)
  find(needle) {
    if (needle === this.key) {
      return true;
    }

    if (needle < this.key && this.left) {
      return this.left.find(needle);
    }

    if (needle > this.key && this.right) {
      return this.right.find(needle);
    }

    return false;
  }

  // O(n)
  isBSTMinMax(min, max) {
    if (this.key < min || this.key > max) {
      return false;
    }

    const isLeft = this.left ? this.left.isBSTMinMax(min, this.key) : true;
    const isRight = this.right ? this.right.isBSTMinMax(this.key, max) : true;

    return isLeft && isRight;
  }

  // O(n)
  // isBSTInOrderTraversal(prev) {
  // }
}

module.exports = Node;
