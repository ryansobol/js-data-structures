'use strict';

class BinaryHeap {
  constructor() {
    this._nodes = [];
  }

  insert(value) {
    this._nodes.push(value);
    this._upHeap(this._nodes.length - 1);

    return value;
  }

  _upHeap(idx) {
    if (idx === 0) {
      return;
    }

    const pIdx = Math.floor((idx - 1) / 2);
    const nodes = this._nodes;

    if (nodes[pIdx] > nodes[idx]) {
      return;
    }

    const temp = nodes[pIdx];

    nodes[pIdx] = nodes[idx];
    nodes[idx] = temp;

    this._upHeap(pIdx);
  }
}

const bh = new BinaryHeap();

bh.insert(2);
console.log(bh._nodes);

bh.insert(3);
console.log(bh._nodes);

bh.insert(4);
console.log(bh._nodes);

bh.insert(1);
console.log(bh._nodes);
