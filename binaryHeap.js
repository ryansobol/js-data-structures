'use strict';

class BinaryHeap {
  // Average: O(n log n)
  // Worst: O(n)
  constructor(...values) {
    this._nodes = [];
    this.length = 0;

    for (const value of values) {
      this.insert(value);
    }
  }

  // O(n)
  toString() {
    return this._nodes.toString();
  }

  // Average: O(1)
  // Worst: O(log n)
  insert(value) {
    this.length += 1;
    this._nodes.push(value);
    this._upHeap(this._nodes.length - 1);

    return value;
  }

  // Average: O(1)
  // Worst: O(log n)
  _upHeap(index) {
    if (index === 0) {
      return;
    }

    const parentIndex = Math.floor((index - 1) / 2);
    const nodes = this._nodes;

    if (nodes[parentIndex] < nodes[index]) {
      return;
    }

    const temp = nodes[parentIndex];

    nodes[parentIndex] = nodes[index];
    nodes[index] = temp;

    this._upHeap(parentIndex);
  }

  // Average: O(1)
  // Worst: O(log n)
  extract() {
    if (this.length === 0) {
      // eslint-disable-next-line no-undefined
      return undefined;
    }

    this.length -= 1;

    const oldRoot = this._nodes[0];
    const newRoot = this._nodes.pop();

    if (this.length !== 0) {
      this._nodes[0] = newRoot;
      this._downHeap(0);
    }

    return oldRoot;
  }

  // Average: O(1)
  // Worst: O(log n)
  _downHeap(index) {
    const nodes = this._nodes;
    const maxIndex = nodes.length - 1;
    const leftIndex = index * 2 + 1;
    const rightIndex = leftIndex + 1;

    let smallestIndex = index;

    if (leftIndex <= maxIndex && nodes[leftIndex] < nodes[smallestIndex]) {
      smallestIndex = leftIndex;
    }

    if (rightIndex <= maxIndex && nodes[rightIndex] < nodes[smallestIndex]) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
      const temp = nodes[index];

      nodes[index] = nodes[smallestIndex];
      nodes[smallestIndex] = temp;

      this._downHeap(smallestIndex);
    }
  }
}

module.exports = BinaryHeap;
