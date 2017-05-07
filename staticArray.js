'use strict';

const Memory = require('./StaticArrayMemory');

class StaticArray {
  // O(1)
  constructor(length) {
    this.length = length;
    this._memory = new Memory(length);
  }

  // O(1)
  _indexToAddress(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError(`invalid index ${index}`);
    }

    return this._memory.head + this._memory.word * index;
  }

  // O(1)
  get(index) {
    const address = this._indexToAddress(index);

    return this._memory.get(address);
  }

  // O(1)
  set(index, value) {
    const address = this._indexToAddress(index);

    this._memory.set(address, value);

    return value;
  }
}

module.exports = StaticArray;
