'use strict';

module.exports = {
  countOnesString(number) {
    return number.toString(2).split('').reduce((accum, element) => {
      return accum + parseInt(element)
    }, 0);
  },

  countOnesBitwise(number) {
    let count;

    for (count = 0; number > 0; number >>= 1) {
      if (number & 1) {
        count++;
      }
    }

    return count;
  },

  countOnesOptimized(number) {
    let count;

    for (count = 0; number > 0; count++) {
      number &= number - 1;
    }

    return count;
  }
}
