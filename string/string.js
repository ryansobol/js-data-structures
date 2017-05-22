'use strict';

// O(2n) ~= O(n)
String.prototype.findFirstNonRepeatingCharSlow = function() {
  const chars = {};

  for (const char of this) {
    if (chars[char]) {
      chars[char] += 1;
    }
    else {
      chars[char] = 1;
    }
  }

  for (const char of this) {
    if (chars[char] === 1) {
      return char;
    }
  }

  return null;
};

'use strict';

// O(mn)
String.prototype.findFirstNonRepeatingCharFast = function() {
  const chars = {};

  for (let i = 0; i < this.length; i++) {
    const char = this[i];

    if (chars[char]) {
      chars[char] += 1;
    }
    else {
      chars[char] = 1;
    }
  }

  for (const char in chars) {
    if (chars[char] === 1) {
      return char;
    }
  }

  return null;
};

String.prototype.isPalindrome = function() {
  if (this.length <= 1) {
    return true;
  }

  if (this[0] !== this[this.length - 1]) {
    return false;
  }

  return this.slice(1, this.length - 1).isPalindrome();
};
