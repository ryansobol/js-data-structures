/* eslint-disable no-undefined */
'use strict';

class DynamicArray {
  // O(1)
  constructor(length = 0) {
    this.length = length;

    this._staticArray = new Float64Array(this.length * 2);
  }

  get capacity() {
    return this._staticArray.length;
  }

  _resize(capacity) {
    this._staticArray = new Float64Array(this._staticArray.buffer, 0, capacity);
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    return this._staticArray[index];
  }

  set(index, element) {
    if (index < 0 || index >= this.length) {
      // TODO throw?
      return undefined;
    }

    this._staticArray[index] = element;

    return element;
  }

  push(element) {
    if (this.length === this._staticArray.length) {
      this._resize((this.length + 1) * 2);
    }

    this._staticArray[this.length] = element;

    this.length += 1;

    return element;
  }

  pop() {
    this.length -= 1;

    const element = this._staticArray[this.length];

    this._staticArray[this.length] = undefined;

    if ((this.length + 1) * 2 === this._staticArray.length) {
      this._resize(this.length);
    }

    return element;
  }
}

module.exports = DynamicArray;
