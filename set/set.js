'use strict';

class Set {
  // O(n)
  constructor(...values) {
    this._data = {};
    this.length = 0;

    for (const value of values) {
      this.insert(value);
    }
  }

  // O(n)
  toString() {
    return Object.keys(this._data).toString();
  }

  // O(1)
  doesExist(value) {
    return Boolean(this._data[value]);
  }

  // O(1)
  insert(value) {
    if (!this._data[value]) {
      this.length += 1;
    }

    this._data[value] = true;

    return value;
  }

  // O(1)
  delete(value) {
    if (this._data[value]) {
      this.length -= 1;
    }

    delete this._data[value];

    return value;
  }

  // O(n)
  * [Symbol.iterator]() {
    for (const value in this._data) {
      yield value;
    }
  }

  // O(n)
  intersection(set) {
    const result = new Set();

    for (const value of set) {
      if (this.doesExist(value)) {
        result.insert(value);
      }
    }

    return result;
  }

  // O(mn)
  union(set) {
    const result = new Set();

    for (const value of this) {
      result.insert(value);
    }

    for (const value of set) {
      result.insert(value);
    }

    return result;
  }
}

module.exports = Set;
