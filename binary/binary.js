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
  },

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
}
