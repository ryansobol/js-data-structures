'use strict';

module.exports = {
  isPowerOfTwo(number) {
    return Number.isInteger(Math.log2(number));
  }
};
