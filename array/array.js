/* eslint-disable no-extend-native */
'use strict';

Array.prototype.removeDuplcatesInPlace = function() {
  if (this.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 0; j < this.length; j++) {
    if (this[i] !== this[j]) {
      i += 1;
      this[i] = this[j];
    }
  }

  return i + 1;
};
