'use strict';

class Quicksort {
  constructor(...values) {
    this.values = values;
  }

  // Best: O(n log n)
  // Average: O(n log n)
  // Worst: O(n^2)
  sort() {
    if (!this.values || !this.values.length){
      return;
    }

    this._quicksort(0, this.values.length - 1);
  }

  // Best: O(n log n)
  // Average: O(n log n)
  // Worst: O(n^2)
  _quicksort(low, high) {
    let i = low;
    let j = high;
    let k = Math.floor(low + (high - low) / 2);

    const pivot = this.values[k];

    while (i <= j) {
      while (this.values[i] < pivot) {
        i += 1;
      }

      while (this.values[j] > pivot) {
        j -= 1;
      }

      if (i <= j) {
        const temp = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = temp;

        i += 1;
        j -= 1;
      }
    }

    if (low < j) {
      this._quicksort(low, j);
    }

    if (i < high) {
      this._quicksort(i, high);
    }
  }
}

module.exports = Quicksort;
