'use strict';

const Node = require('./node');

class BinarySearchTree {
  // Average: O(n log n)
  // Worst: O(2n) ~= O(n)
  constructor(...values) {
    this.length = 0;
    this._root = null;

    for (const value of values) {
      this.insertIteratively(value);
    }
  }

  // O(n)
  toString() {
    if (!this._root) {
      return '';
    }

    return this._root.toString();
  }

  // Average: O(log n)
  // Worst: O(n)
  // eslint-disable-next-line max-statements
  insertIteratively(value) {
    const node = new Node(value);

    if (!this._root) {
      this.length += 1;
      this._root = node;

      return value;
    }

    let current = this._root;
    let parent;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value === current.key) {
        return value;
      }

      parent = current;

      if (value < current.key) {
        current = current.left;

        if (!current) {
          this.length += 1;
          parent.left = node;

          return value;
        }
      }
      else {
        current = current.right;

        if (!current) {
          this.length += 1;
          parent.right = node;

          return value;
        }
      }
    }
  }

  // Average: O(log n)
  // Worst: O(n)
  insertRecursively(value) {
    if (!this._root) {
      this.length += 1;
      this._root = new Node(value);

      return value;
    }

    const result = this._root.insert(value);

    // eslint-disable-next-line no-undefined
    if (result !== undefined) {
      this.length += 1;
    }

    return value;
  }

  // Average: O(log n)
  // Worst: O(n)
  findIteratively(needle) {
    let current = this._root;

    while (current) {
      if (needle === current.key) {
        return true;
      }

      if (needle < current.key) {
        current = current.left;
      }
      else {
        current = current.right;
      }
    }

    return false;
  }

  // Average: O(log n)
  // Worst: O(n)
  findRecursively(needle) {
    if (this._root) {
      return this._root.find(needle);
    }

    return false;
  }

  // O(n)
  isBSTMinMax() {
    if (!this._root) {
      return true;
    }

    return this._root.isBSTMinMax(-Number.MAX_VALUE, Number.MAX_VALUE);
  }

  // O(n)
  isBSTInOrderTraversal() {
    if (!this._root) {
      return true;
    }

    let current = this._root;
    const stack = [];

    let prev;

    while (current || stack.length > 0) {
      if (current) {
        stack.push(current);
        current = current.left;

        continue;
      }

      current = stack.pop();

      if (prev === undefined) {
        prev = current.key;
      }
      else if (current.key < prev) {
        return false;
      }
      else {
        prev = current.key;
      }

      current = current.right;
    }

    return true;
  }

  lowestCommonAncestor(a, b) {
    if (!this._root) {
      return null;
    }

    return this._root.lowestCommonAncestor(a, b);
  }
}

module.exports = BinarySearchTree;
