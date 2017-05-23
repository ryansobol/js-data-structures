/* eslint-disable no-extend-native */
'use strict';

// O(n)
Array.prototype.findFirstDuplicate = function() {
  let i = 0;
  let j = 1;

  while (j < this.length) {
    if (this[i] === this[j]) {
      return this[i];
    }

    i += 1;
    j += 1;
  }

  return null;
};

// O(2n) ~= O(n)
Array.prototype.removeDuplcatesSet = function() {
  const set = new Set(this);

  return [...set];
};

// O(n)
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

  this.splice(i + 1);

  return i + 1;
};

// O(an) where a is the number of anagrams
Array.prototype.listAllAnagrams = function() {
  const table = {};

  for (const word of this) {
    const sortedWord = word.split('').sort().join('');

    if (table[sortedWord]) {
      table[sortedWord].push(word);
    }
    else {
      table[sortedWord] = [word];
    }
  }

  const results = [];

  for (const sortedWord in table) {
    if (table[sortedWord].length > 1) {
      results.push(...table[sortedWord]);
    }
  }

  return results;
};
