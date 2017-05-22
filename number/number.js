'use strict';

Number.isPowerOfTwo = function(number) {
  return Number.isInteger(Math.log2(number));
};
