'use strict';

class StaticArrayMemory {
  // O(1)
  constructor(length) {
    this._chunk = new Array(this.length);
    this.length = length;
    this.word = 64;

    // random integer between 0 and 5000 inclusively times the word integer
    this.head = Math.floor(Math.random() * (5000 - 0 + 1)) * this.word;
  }

  // O(1)
  _addressToIndex(address) {
    if (address < this.head || address >= this.head * this.word * this.length) {
      throw new RangeError(`invalid address ${address}`);
    }

    return (address - this.head) / this.word;
  }

  // O(1)
  get(address) {
    const index = this._addressToIndex(address);

    return this._chunk[index];
  }

  // O(1)
  set(address, value) {
    const index = this._addressToIndex(address);

    this._chunk[index] = value;

    return value;
  }
}

module.exports = StaticArrayMemory;
