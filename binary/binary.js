/* eslint-disable no-bitwise */
'use strict';

module.exports = {
  // O(2n) ~= O(n)
  countOnesString(number) {
    return number.toString(2).split('').reduce((accum, element) => {
      return accum + parseInt(element);
    }, 0);
  },

  // O(d) where d is the number of digits
  countOnesBitwise(number) {
    let count;

    for (count = 0; number > 0; number >>= 1) {
      if (number & 1) {
        count += 1;
      }
    }

    return count;
  },

  // O(c) where c is the number of ones
  countOnesOptimized(number) {
    let count;

    for (count = 0; number > 0; count++) {
      number &= number - 1;
    }

    return count;
  },

  // O(n)
  // For recursive solution, see String.prototype.isPalindrome
  isPalindrome(number) {
    const string = number.toString(2);
    const stack = [];

    for (let i = 0; i < Math.floor(string.length / 2); i++) {
      stack.push(string[i]);
    }

    for (let i = Math.ceil(string.length / 2); i < string.length; i++) {
      if (stack.pop() !== string[i]) {
        return false;
      }
    }

    return true;
  }
};
